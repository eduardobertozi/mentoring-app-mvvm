import {
  HTTPRequest,
  IHTTPClientGateway,
} from '@/repositories/http-client-gateway'
import axios, { AxiosError, AxiosInstance } from 'axios'

export class AxiosHttpClient implements IHTTPClientGateway {
  private constructor(
    private readonly api: AxiosInstance = axios,
    private baseUrl: string,
  ) {}

  static create() {
    return new AxiosHttpClient(axios, 'http://localhost:3333')
  }

  async sendRequest<TResponse, TBody = unknown>(request: HTTPRequest<TBody>) {
    const { endpoint, method, body, headers } = request

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${this.baseUrl}/${endpoint}`,
        method,
        headers,
        data: body,
      })

      return data
    } catch (err) {
      const error = err as AxiosError
      const status = error.response?.status || 500
      const message = error.response?.data || error.message

      throw new Error(`Request failed with status: ${status}: ${message}`)
    }
  }
}
