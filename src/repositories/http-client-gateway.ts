export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type HTTPRequest<TBody> = {
  endpoint: string
  method: HTTPMethod
  body?: TBody
  headers?: Record<string, string>
}

export interface IHTTPClientGateway {
  sendRequest: <TResponse, TBody = unknown>(
    request: HTTPRequest<TBody>,
  ) => Promise<TResponse>
}
