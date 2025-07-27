


declare module "*.png" {
    const content: string;
    export default content
}

declare module "*.svg" {
    const content: string;
    const Icon: React.ReactNode;

    export {Icon};
    export default content;
}

declare module "*.module.css" {
    const content: { readonly [key: string]: string};
    export default content;
}

declare module "*.module.scss" {
    const content: Record<string, string>;
    export default content;
}
