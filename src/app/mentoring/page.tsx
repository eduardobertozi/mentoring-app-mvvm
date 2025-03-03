'use client'

import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'
import {
  CreateMentoringScheduleService,
  MockCreateMentoringScheduleServiceSuccess,
} from '../../services/mentoring/create-mentoring-schedule.service'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'

const MentoringPage = () => {
  const httpClient = AxiosHttpClient.create()
  // const createMentoringScheduleService = MockCreateMentoringScheduleServiceSuccess
  const createMentoringScheduleService = new CreateMentoringScheduleService(
    httpClient,
  )
  const methods = useMentoringModel({
    createMentoringScheduleService,
  })

  return <MentoringView {...methods} />
}

export default MentoringPage
