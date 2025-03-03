'use client'

import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { CreateMentoringScheduleService } from '../../services/mentoring/create-mentoring-schedule.service'
import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'

const MentoringPage = () => {
  const httpClient = AxiosHttpClient.create()

  const methods = useMentoringModel({
    createMentoringScheduleService: new CreateMentoringScheduleService(
      httpClient,
    ),
  })

  return <MentoringView {...methods} />
}

export default MentoringPage
