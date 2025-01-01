// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sAm7j9mZDvyUmEcguggAEZ
// Component: Sg4ECxtshw6E

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import FormItem from "../../FormItem"; // plasmic-import: D_-29DFy6get/component
import Separator from "../../Separator"; // plasmic-import: fpGcqQ82peL5/component
import Button from "../../Button"; // plasmic-import: MkhwwcjTHS98/component
import Loading from "../../Loading"; // plasmic-import: wIkzkfmPeBFp/component

import { useScreenVariants as useScreenVariantswbSvjcbuSqcK } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WbSvjcbuSqcK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: sAm7j9mZDvyUmEcguggAEZ/projectcss
import sty from "./PlasmicInscricaoComp.module.css"; // plasmic-import: Sg4ECxtshw6E/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 0-6OlSUyBVv6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: h_0_6QYFY5gx/icon

createPlasmicElementProxy;

export type PlasmicInscricaoComp__VariantMembers = {};
export type PlasmicInscricaoComp__VariantsArgs = {};
type VariantPropType = keyof PlasmicInscricaoComp__VariantsArgs;
export const PlasmicInscricaoComp__VariantProps = new Array<VariantPropType>();

export type PlasmicInscricaoComp__ArgsType = {
  onSignup?: () => void;
  isLoading?: boolean;
};
type ArgPropType = keyof PlasmicInscricaoComp__ArgsType;
export const PlasmicInscricaoComp__ArgProps = new Array<ArgPropType>(
  "onSignup",
  "isLoading"
);

export type PlasmicInscricaoComp__OverridesType = {
  root?: Flex__<"div">;
  nome?: Flex__<typeof FormItem>;
  nascimento?: Flex__<typeof FormItem>;
  email?: Flex__<typeof FormItem>;
  doc?: Flex__<typeof FormItem>;
  telefone?: Flex__<typeof FormItem>;
  separator?: Flex__<typeof Separator>;
  nome2?: Flex__<typeof FormItem>;
  data2?: Flex__<typeof FormItem>;
  signup?: Flex__<typeof Button>;
  loading?: Flex__<typeof Loading>;
};

export interface DefaultInscricaoCompProps {
  onSignup?: () => void;
  isLoading?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInscricaoComp__RenderFunc(props: {
  variants: PlasmicInscricaoComp__VariantsArgs;
  args: PlasmicInscricaoComp__ArgsType;
  overrides: PlasmicInscricaoComp__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          isLoading: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "nome.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "nascimento.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "email.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "doc.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "telefone.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "nome2.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "data2.textInputValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "validation",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswbSvjcbuSqcK()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___0FfHu)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__x0THa)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fK8F
            )}
          >
            {"Inscri\u00e7\u00e3o"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__nv9YT)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1I4U
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Valores e prazos:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__fnEh0
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__h9QAb
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 1: R$ 2.476,00 (01/01/25 at\u00e9 31/03/25) "
                          : "Lote 1: R$ 2.476,00 (01/01/25 at\u00e9 31/03/25) "}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___3Bl3C
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__b40R
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 2: R$ 2.625,00 (01/04/24 at\u00e9 31/07/25)"
                          : "Lote 2: R$ 2.625,00 (01/04/24 at\u00e9 31/07/25)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___4IvZa
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__m2Efp
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 3: R$ 2.783,00 (01/08/25 at\u00e9 30/11/25)"
                          : "Lote 3: R$ 2.783,00 (01/08/25 at\u00e9 30/11/25)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Promo\u00e7\u00e3o:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__wQp4
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__mR6
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 1: R$ 2.228,40 (\u00c0 vista)"
                          : "Lote 1: R$ 2.228,40 (\u00c0 vista)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Acompanhantes:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___7KoJz
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__zJtkU
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Crian\u00e7as de 0 a 04 anos: Corteria "
                          : "Crian\u00e7as de 0 a 04 anos: Corteria "}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__czYc3
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li___4ITn
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Crian\u00e7as de 05 a 11 anos: R$ 310,00 (Di\u00e1ria)"
                          : "Crian\u00e7as de 05 a 11 anos: R$ 310,00 (Di\u00e1ria)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Valores e prazos:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__fnEh0
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__h9QAb
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 1: R$ 2.476,00 (01/01/25 at\u00e9 31/03/25) "
                          : "Lote 1: R$ 2.476,00 (01/01/25 at\u00e9 31/03/25) "}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___3Bl3C
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__b40R
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 2: R$ 2.625,00 (01/04/24 at\u00e9 31/07/25)"
                          : "Lote 2: R$ 2.625,00 (01/04/24 at\u00e9 31/07/25)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___4IvZa
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__m2Efp
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 3: R$ 2.783,00 (01/08/25 at\u00e9 30/11/25)"
                          : "Lote 3: R$ 2.783,00 (01/08/25 at\u00e9 30/11/25)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Promo\u00e7\u00e3o:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__wQp4
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__mR6
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Lote 1: R$ 2.228,40 (\u00c0 vista)"
                          : "Lote 1: R$ 2.228,40 (\u00c0 vista)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Acompanhantes:"}
                  </span>
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___7KoJz
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__zJtkU
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Crian\u00e7as de 0 a 04 anos: Corteria "
                          : "Crian\u00e7as de 0 a 04 anos: Corteria "}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__czYc3
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li___4ITn
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Crian\u00e7as de 05 a 11 anos: R$ 310,00 (Di\u00e1ria)"
                          : "Crian\u00e7as de 05 a 11 anos: R$ 310,00 (Di\u00e1ria)"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {(() => {
          try {
            return !!$state.validation;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div className={classNames(projectcss.all, sty.freeBox___3CUi6)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mOknk
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.validation;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        ) : null}
        <div className={classNames(projectcss.all, sty.freeBox__m1Yx1)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wSjot)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eorOd
              )}
            >
              {"Dados do titular"}
            </div>
            <FormItem
              data-plasmic-name={"nome"}
              data-plasmic-override={overrides.nome}
              className={classNames("__wab_instance", sty.nome)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "nome",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "nome",
                "textInputValue"
              ])}
            />

            <FormItem
              data-plasmic-name={"nascimento"}
              data-plasmic-override={overrides.nascimento}
              className={classNames("__wab_instance", sty.nascimento)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "nascimento",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "nascimento",
                "textInputValue"
              ])}
            >
              {"Data de nascimento"}
            </FormItem>
            <FormItem
              data-plasmic-name={"email"}
              data-plasmic-override={overrides.email}
              className={classNames("__wab_instance", sty.email)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "email",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "email",
                "textInputValue"
              ])}
            >
              {"E-mail"}
            </FormItem>
            <FormItem
              data-plasmic-name={"doc"}
              data-plasmic-override={overrides.doc}
              className={classNames("__wab_instance", sty.doc)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "doc",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "doc",
                "textInputValue"
              ])}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0Noit
                )}
              >
                {"Documento de identidade"}
              </div>
            </FormItem>
            <FormItem
              data-plasmic-name={"telefone"}
              data-plasmic-override={overrides.telefone}
              className={classNames("__wab_instance", sty.telefone)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "telefone",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "telefone",
                "textInputValue"
              ])}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__diWhJ
                )}
              >
                {"Telefone"}
              </div>
            </FormItem>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox___8PHs)}>
            <Separator
              data-plasmic-name={"separator"}
              data-plasmic-override={overrides.separator}
              className={classNames("__wab_instance", sty.separator)}
            />
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___2Gvw)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hfOz
              )}
            >
              {"Dados do acompanhante"}
            </div>
            <FormItem
              data-plasmic-name={"nome2"}
              data-plasmic-override={overrides.nome2}
              className={classNames("__wab_instance", sty.nome2)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "nome2",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "nome2",
                "textInputValue"
              ])}
            />

            <FormItem
              data-plasmic-name={"data2"}
              data-plasmic-override={overrides.data2}
              className={classNames("__wab_instance", sty.data2)}
              onTextInputValueChange={async (...eventArgs: any) => {
                generateStateOnChangeProp($state, [
                  "data2",
                  "textInputValue"
                ]).apply(null, eventArgs);

                if (
                  eventArgs.length > 1 &&
                  eventArgs[1] &&
                  eventArgs[1]._plasmic_state_init_
                ) {
                  return;
                }
              }}
              textInputValue={generateStateValueProp($state, [
                "data2",
                "textInputValue"
              ])}
            >
              {"Data de nascimento"}
            </FormItem>
          </Stack__>
          <Button
            data-plasmic-name={"signup"}
            data-plasmic-override={overrides.signup}
            className={classNames("__wab_instance", sty.signup)}
            onClick={async event => {
              const $steps = {};

              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return $props.onSignup({
                          nome: $state.nome.textInputValue,
                          nascimento: $state.nascimento.textInputValue,
                          email: $state.email.textInputValue,
                          doc: $state.doc.textInputValue,
                          telefone: $state.telefone.textInputValue,
                          nome2: $state.nome2.textInputValue,
                          nascimento2: $state.data2.textInputValue
                        });
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }

              $steps["updateValidation"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["validation"]
                      },
                      operation: 0,
                      value: $steps.runCode
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateValidation"] != null &&
                typeof $steps["updateValidation"] === "object" &&
                typeof $steps["updateValidation"].then === "function"
              ) {
                $steps["updateValidation"] = await $steps["updateValidation"];
              }
            }}
          >
            {"Confirmar"}
          </Button>
        </div>
      </Stack__>
      {(() => {
        try {
          return $props.isLoading;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <Loading
          data-plasmic-name={"loading"}
          data-plasmic-override={overrides.loading}
          className={classNames("__wab_instance", sty.loading)}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "nome",
    "nascimento",
    "email",
    "doc",
    "telefone",
    "separator",
    "nome2",
    "data2",
    "signup",
    "loading"
  ],
  nome: ["nome"],
  nascimento: ["nascimento"],
  email: ["email"],
  doc: ["doc"],
  telefone: ["telefone"],
  separator: ["separator"],
  nome2: ["nome2"],
  data2: ["data2"],
  signup: ["signup"],
  loading: ["loading"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  nome: typeof FormItem;
  nascimento: typeof FormItem;
  email: typeof FormItem;
  doc: typeof FormItem;
  telefone: typeof FormItem;
  separator: typeof Separator;
  nome2: typeof FormItem;
  data2: typeof FormItem;
  signup: typeof Button;
  loading: typeof Loading;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInscricaoComp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInscricaoComp__VariantsArgs;
    args?: PlasmicInscricaoComp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInscricaoComp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInscricaoComp__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicInscricaoComp__ArgProps,
          internalVariantPropNames: PlasmicInscricaoComp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInscricaoComp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInscricaoComp";
  } else {
    func.displayName = `PlasmicInscricaoComp.${nodeName}`;
  }
  return func;
}

export const PlasmicInscricaoComp = Object.assign(
  // Top-level PlasmicInscricaoComp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    nome: makeNodeComponent("nome"),
    nascimento: makeNodeComponent("nascimento"),
    email: makeNodeComponent("email"),
    doc: makeNodeComponent("doc"),
    telefone: makeNodeComponent("telefone"),
    separator: makeNodeComponent("separator"),
    nome2: makeNodeComponent("nome2"),
    data2: makeNodeComponent("data2"),
    signup: makeNodeComponent("signup"),
    loading: makeNodeComponent("loading"),

    // Metadata about props expected for PlasmicInscricaoComp
    internalVariantProps: PlasmicInscricaoComp__VariantProps,
    internalArgProps: PlasmicInscricaoComp__ArgProps
  }
);

export default PlasmicInscricaoComp;
/* prettier-ignore-end */
