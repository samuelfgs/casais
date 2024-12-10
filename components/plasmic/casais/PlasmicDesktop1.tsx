// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sAm7j9mZDvyUmEcguggAEZ
// Component: cAXqSs1VbbDV

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
import sty from "./PlasmicDesktop1.module.css"; // plasmic-import: cAXqSs1VbbDV/css

createPlasmicElementProxy;

export type PlasmicDesktop1__VariantMembers = {};
export type PlasmicDesktop1__VariantsArgs = {};
type VariantPropType = keyof PlasmicDesktop1__VariantsArgs;
export const PlasmicDesktop1__VariantProps = new Array<VariantPropType>();

export type PlasmicDesktop1__ArgsType = {};
type ArgPropType = keyof PlasmicDesktop1__ArgsType;
export const PlasmicDesktop1__ArgProps = new Array<ArgPropType>();

export type PlasmicDesktop1__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultDesktop1Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDesktop1__RenderFunc(props: {
  variants: PlasmicDesktop1__VariantsArgs;
  args: PlasmicDesktop1__ArgsType;
  overrides: PlasmicDesktop1__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___3QEgs)}>
        <div className={classNames(projectcss.all, sty.freeBox___76GhU)}>
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__ypeaO)}
            displayHeight={"100%"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/casais/images/fundoMaos.jpg",
              fullWidth: 1600,
              fullHeight: 900,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__invek)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jvKCo)}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__w78Ms)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"200px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/casais/images/logo3.png",
              fullWidth: 414,
              fullHeight: 433,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__feVn5
            )}
          >
            {"N\u00f3s Dois"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4UYVg
            )}
          >
            {"Retiro de casais"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hWNp
            )}
          >
            {"13 \u00e0 15 de dezembro"}
          </div>
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDesktop1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDesktop1__VariantsArgs;
    args?: PlasmicDesktop1__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDesktop1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDesktop1__ArgsType,
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
          internalArgPropNames: PlasmicDesktop1__ArgProps,
          internalVariantPropNames: PlasmicDesktop1__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDesktop1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDesktop1";
  } else {
    func.displayName = `PlasmicDesktop1.${nodeName}`;
  }
  return func;
}

export const PlasmicDesktop1 = Object.assign(
  // Top-level PlasmicDesktop1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDesktop1
    internalVariantProps: PlasmicDesktop1__VariantProps,
    internalArgProps: PlasmicDesktop1__ArgProps
  }
);

export default PlasmicDesktop1;
/* prettier-ignore-end */
