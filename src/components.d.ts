/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppAddbookmark {
    }
    interface AppBookmarktable {
        "linkIcon": string;
        "searchIcon": string;
    }
    interface AppButton {
        "clickHandler": () => void;
        "isDeleteButton": boolean;
    }
    interface AppHeader {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppAddbookmarkElement extends Components.AppAddbookmark, HTMLStencilElement {
    }
    var HTMLAppAddbookmarkElement: {
        prototype: HTMLAppAddbookmarkElement;
        new (): HTMLAppAddbookmarkElement;
    };
    interface HTMLAppBookmarktableElement extends Components.AppBookmarktable, HTMLStencilElement {
    }
    var HTMLAppBookmarktableElement: {
        prototype: HTMLAppBookmarktableElement;
        new (): HTMLAppBookmarktableElement;
    };
    interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {
    }
    var HTMLAppButtonElement: {
        prototype: HTMLAppButtonElement;
        new (): HTMLAppButtonElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-addbookmark": HTMLAppAddbookmarkElement;
        "app-bookmarktable": HTMLAppBookmarktableElement;
        "app-button": HTMLAppButtonElement;
        "app-header": HTMLAppHeaderElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppAddbookmark {
    }
    interface AppBookmarktable {
        "linkIcon"?: string;
        "searchIcon"?: string;
    }
    interface AppButton {
        "clickHandler"?: () => void;
        "isDeleteButton"?: boolean;
    }
    interface AppHeader {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-addbookmark": AppAddbookmark;
        "app-bookmarktable": AppBookmarktable;
        "app-button": AppButton;
        "app-header": AppHeader;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-addbookmark": LocalJSX.AppAddbookmark & JSXBase.HTMLAttributes<HTMLAppAddbookmarkElement>;
            "app-bookmarktable": LocalJSX.AppBookmarktable & JSXBase.HTMLAttributes<HTMLAppBookmarktableElement>;
            "app-button": LocalJSX.AppButton & JSXBase.HTMLAttributes<HTMLAppButtonElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
