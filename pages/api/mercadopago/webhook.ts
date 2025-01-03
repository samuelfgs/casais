// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "../email";
import { updateSheets } from "@/lib/update-sheets";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
  { auth: { persistSession: false } }
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const paymentId = req.query?.["data.id"];
  const topic = req.query?.type;

  if (topic !== "payment") {
    res.status(200).json({ q: req.query });
    return;
  }

  const mercadoPago = await (
    await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
  ).json();

  console.log("dale1", { paymentId, mercadoPago });
  if (mercadoPago.status !== "approved") {
    console.log("dale", "not paid");
    res.status(500).json("not paid");
    return;
  }

  const mercadoPagoId = mercadoPago.external_reference;
  const { data: inscritoData, error: inscritoError } = await supabase
    .from("retiro")
    .select("*")
    .eq("mercadoPagoId", mercadoPagoId);

  console.log("dale2", { mercadoPagoId, inscritoData });
  if (inscritoError || inscritoData.length !== 1) {
    throw new Error(inscritoError?.message ?? "Unknown error");
  }

  const inscrito = inscritoData[0];

  const { data: paymentData, error: paymentError } = await supabase
    .from("payments_retiro")
    .upsert({
      user_id: inscrito.id,
      price: process.env.NEXT_PUBLIC_PRICE,
      paid: true,
      link: mercadoPago.init_point,
      method: mercadoPago.payment_method_id,
      lote: 0,
    })
    .eq("user_id", inscrito.id)
    .select("*");

  console.log("dale3", { id: inscrito.id, paymentData });
  if (paymentError || !paymentData || paymentData.length !== 1) {
    console.log("paymentError", { paymentError, paymentData });
    throw new Error(paymentError?.message ?? "Unknown error");
  }

  if (inscrito.sent_email) {
    res.status(200).json({ ...inscrito, already_sent: true });
    return;
  }

  try {
    const email = await sendEmail({
      name: inscrito.nome,
      name2: inscrito.nome2,
      cpf: inscrito.doc,
      email: inscrito.email,
      price: process.env.NEXT_PUBLIC_PRICE,
      id: `${inscrito.id}`,
    });
    console.log("dale3", "success", email);
  } catch (err) {
    console.log("err3", err);
    res.status(500).json(err);
    return;
  }

  const { error: error2 } = await supabase
    .from("retiro")
    .update({ sent_email: true })
    .eq("id", inscrito.id);

  if (error2) {
    console.log("error", error2);
    res.status(500).json(error2);
  } else {
    // const ret = await updateSheets();
    // console.log("dale4", { updateSheets: ret });
    res.status(200).json({ inscrito, updatedSheet: false });
  }
}
