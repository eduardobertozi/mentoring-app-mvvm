import { api } from '@/lib/api'
import { SchemaMentoringType } from '../mentoring.types'

export interface ICreateMentoringAgendaService {
  execute: (data: SchemaMentoringType) => Promise<string>
}

export class CreateMentoringAgendaService
  implements ICreateMentoringAgendaService
{
  async execute(body: SchemaMentoringType): Promise<string> {
    const { data } = await api.post<string>('/events', body)
    return data
  }
}

/* Exemplo de uso para demonstrar o valor de se usar injeção e inversão de dependência */
export const MockCreateMentoringAgendaServiceSuccess: ICreateMentoringAgendaService =
  {
    execute: async (body: SchemaMentoringType) => {
      return new Promise((resolve) => resolve('teste'))
    },
  }
