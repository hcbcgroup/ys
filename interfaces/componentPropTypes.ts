import { ExternalLinkProp, InternalLinkProp } from "./componentPropInterfaces";

export type LayoutComponentProps = {
    children: JSX.Element;
}
export type NavigationProps = {
    links: Array<InternalLinkProp>;
}