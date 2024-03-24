import Elysia from "elysia";
type TSchemaHandler = ({ path, url, }: {
    path: string;
    url: string;
}) => Parameters<InstanceType<typeof Elysia>["group"]>[1];
export interface ITypesOptions {
    output?: string | string[];
    typeName?: string;
    useExport?: boolean;
}
export interface IAutoloadOptions {
    pattern?: string;
    dir?: string;
    prefix?: string;
    schema?: TSchemaHandler;
    types?: ITypesOptions | true;
}
export declare const autoload: (options?: IAutoloadOptions) => (app: InstanceType<typeof Elysia>) => Promise<Elysia<string, {
    request: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {}, {}, {}, false>>;
export * from "./types";
