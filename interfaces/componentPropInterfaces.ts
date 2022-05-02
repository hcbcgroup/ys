/**
 * @pageTo (absolute route path) : string | undefined
 * @pageText (displayable text) : string | undefined
 */
export interface InternalLinkProp {
    pageTo: string;
    pageText: string | undefined;
}
/**
 * @pageUrl (page url ) : string | undefined
 * @pageText (displayable text) : string | undefined
 */
export interface ExternalLinkProp {
    pageUrl: string;
    pageText: string | undefined;
}


