import {
  HTTPMethod,
  IHTTPClientGateway,
} from '@/repositories/http-client-gateway'
import { SchemaMentoringType } from '@/app/mentoring/mentoring.types'

export interface ICreateMentoringScheduleService {
  execute: (data: SchemaMentoringType) => Promise<string>
}

export class CreateMentoringScheduleService
  implements ICreateMentoringScheduleService
{
  constructor(private readonly httpClient: IHTTPClientGateway) {}

  async execute(body: SchemaMentoringType): Promise<string> {
    return this.httpClient.sendRequest<string, SchemaMentoringType>({
      endpoint: 'events',
      method: HTTPMethod.POST,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

/* Exemplo de uso para demonstrar o valor de se usar injeção e inversão de dependência */
export const MockCreateMentoringScheduleServiceSuccess: ICreateMentoringScheduleService =
  {
    execute: async (body: SchemaMentoringType) => {
      return new Promise((resolve) => resolve('teste'))
    },
  }
