


declare module "*.png" {
    const content: string;
    export default content
}

declare module "*.svg?url" {
    const svg: string;
    export default svg;
}

declare module "*.svg" {
    import { FC, SVGProps } from "react";
    export const ReactComponent: FC<SVGProps<SVGElement>>;
}

declare module "*.module.css" {
    const content: { readonly [key: string]: string};
    export default content;
}

declare module "*.module.scss" {
    const content: Record<string, string>;
    export default content;
}
