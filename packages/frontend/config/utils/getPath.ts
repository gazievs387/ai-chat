import path from "path";


export function getPath(...paths: string[]): string {
    return path.resolve(__dirname, "..", "..", ...paths)
}
