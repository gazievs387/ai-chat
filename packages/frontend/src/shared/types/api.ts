


import { AxiosError } from "axios";


export type QueryError = AxiosError<{code: string}> | undefined
