// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sAm7j9mZDvyUmEcguggAEZ
// Component: AuAxc9cZuA_4

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: sAm7j9mZDvyUmEcguggAEZ/projectcss
import sty from "./PlasmicMobile3.module.css"; // plasmic-import: AuAxc9cZuA_4/css

import FolhaIcon from "./icons/PlasmicIcon__Folha"; // plasmic-import: TE_sY4vbhrOu/icon

createPlasmicElementProxy;

export type PlasmicMobile3__VariantMembers = {};
export type PlasmicMobile3__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobile3__VariantsArgs;
export const PlasmicMobile3__VariantProps = new Array<VariantPropType>();

export type PlasmicMobile3__ArgsType = {};
type ArgPropType = keyof PlasmicMobile3__ArgsType;
export const PlasmicMobile3__ArgProps = new Array<ArgPropType>();

export type PlasmicMobile3__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultMobile3Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMobile3__RenderFunc(props: {
  variants: PlasmicMobile3__VariantsArgs;
  args: PlasmicMobile3__ArgsType;
  overrides: PlasmicMobile3__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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
      <FolhaIcon
        className={classNames(projectcss.all, sty.svg__hTovF)}
        role={"img"}
      />

      <FolhaIcon
        className={classNames(projectcss.all, sty.svg___9Ugox)}
        role={"img"}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gkBMj
          )}
        >
          {"N\u00f3s Dois"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yB7O1
          )}
        >
          {
            "Voc\u00ea e seu c\u00f4njuge est\u00e3o convidados para um retiro especial, onde a f\u00e9 e o amor se encontram em um ambiente acolhedor e inspirador. Este \u00e9 um momento \u00fanico para se desconectar da rotina di\u00e1ria e se reconectar com Deus e com o seu amor. Durante o retiro, teremos din\u00e2micas interativas, momentos de reflex\u00e3o e ensinamentos que fortalecer\u00e3o os la\u00e7os entre voc\u00eas.\n\nJunte-se a n\u00f3s para um final de semana repleto de aprendizado, ora\u00e7\u00e3o e crescimento m\u00fatuo. Ser\u00e1 uma oportunidade de compartilhar experi\u00eancias com outros casais, renovar seus votos e redescobrir a beleza da uni\u00e3o sob a luz da f\u00e9. N\u00e3o perca a chance de viver essa experi\u00eancia transformadora e cheia de b\u00ean\u00e7\u00e3os. "
          }
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobile3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobile3__VariantsArgs;
    args?: PlasmicMobile3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMobile3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMobile3__ArgsType,
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
          internalArgPropNames: PlasmicMobile3__ArgProps,
          internalVariantPropNames: PlasmicMobile3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMobile3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMobile3";
  } else {
    func.displayName = `PlasmicMobile3.${nodeName}`;
  }
  return func;
}

export const PlasmicMobile3 = Object.assign(
  // Top-level PlasmicMobile3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMobile3
    internalVariantProps: PlasmicMobile3__VariantProps,
    internalArgProps: PlasmicMobile3__ArgProps
  }
);

export default PlasmicMobile3;
/* prettier-ignore-end */
