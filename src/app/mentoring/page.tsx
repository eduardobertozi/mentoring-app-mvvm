'use client'

import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'
import {
  CreateMentoringAgendaService,
  MockCreateMentoringAgendaServiceSuccess,
} from '../../services/mentoring/mentoring-agenda.service'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

const MentoringPage = () => {
  const httpClient = AxiosHttpClient.create()
  // const createMentoringAgendaService = MockCreateMentoringAgendaServiceSuccess
  const createMentoringAgendaService = new CreateMentoringAgendaService(
    httpClient,
  )
  const methods = useMentoringModel({
    createMentoringAgendaService,
  })

  return <MentoringView {...methods} />
}

export default MentoringPage
