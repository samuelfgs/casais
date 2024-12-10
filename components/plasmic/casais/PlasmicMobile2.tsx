// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sAm7j9mZDvyUmEcguggAEZ
// Component: Ya1Lo3itYxCg

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

import Button from "../../Button"; // plasmic-import: MkhwwcjTHS98/component

import { useScreenVariants as useScreenVariantswbSvjcbuSqcK } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: WbSvjcbuSqcK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: sAm7j9mZDvyUmEcguggAEZ/projectcss
import sty from "./PlasmicMobile2.module.css"; // plasmic-import: Ya1Lo3itYxCg/css

import FolhaIcon from "./icons/PlasmicIcon__Folha"; // plasmic-import: TE_sY4vbhrOu/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: 0-6OlSUyBVv6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: h_0_6QYFY5gx/icon

createPlasmicElementProxy;

export type PlasmicMobile2__VariantMembers = {};
export type PlasmicMobile2__VariantsArgs = {};
type VariantPropType = keyof PlasmicMobile2__VariantsArgs;
export const PlasmicMobile2__VariantProps = new Array<VariantPropType>();

export type PlasmicMobile2__ArgsType = {};
type ArgPropType = keyof PlasmicMobile2__ArgsType;
export const PlasmicMobile2__ArgProps = new Array<ArgPropType>();

export type PlasmicMobile2__OverridesType = {
  root?: Flex__<"div">;
  button?: Flex__<typeof Button>;
};

export interface DefaultMobile2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMobile2__RenderFunc(props: {
  variants: PlasmicMobile2__VariantsArgs;
  args: PlasmicMobile2__ArgsType;
  overrides: PlasmicMobile2__OverridesType;
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
      <FolhaIcon
        className={classNames(projectcss.all, sty.svg__ax3An)}
        role={"img"}
      />

      <FolhaIcon
        className={classNames(projectcss.all, sty.svg___5NnUd)}
        role={"img"}
      />

      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kBe3)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__atu7D)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__f33Tg
            )}
          >
            {"Feito por casais"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__owkOc
            )}
          >
            {"Feito para casais"}
          </div>
        </Stack__>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={
            hasVariant(globalVariants, "screen", "tablet")
              ? "softSand"
              : undefined
          }
          link={`/inscricao`}
          shape={"rounded"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qd1CU
            )}
          >
            {hasVariant(globalVariants, "screen", "tablet")
              ? "INSCRI\u00c7\u00c3O"
              : "QUERO PARTICIPAR"}
          </div>
        </Button>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMobile2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMobile2__VariantsArgs;
    args?: PlasmicMobile2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMobile2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMobile2__ArgsType,
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
          internalArgPropNames: PlasmicMobile2__ArgProps,
          internalVariantPropNames: PlasmicMobile2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMobile2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMobile2";
  } else {
    func.displayName = `PlasmicMobile2.${nodeName}`;
  }
  return func;
}

export const PlasmicMobile2 = Object.assign(
  // Top-level PlasmicMobile2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicMobile2
    internalVariantProps: PlasmicMobile2__VariantProps,
    internalArgProps: PlasmicMobile2__ArgProps
  }
);

export default PlasmicMobile2;
/* prettier-ignore-end */
