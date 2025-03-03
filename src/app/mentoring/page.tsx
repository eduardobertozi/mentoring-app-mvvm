'use client'

import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'
import {
  CreateMentoringAgendaService,
  MockCreateMentoringAgendaServiceSuccess,
} from './services/mentoring-agenda.service'

const MentoringPage = () => {
  // const createMentoringAgendaService = MockCreateMentoringAgendaServiceSuccess
  const createMentoringAgendaService = new CreateMentoringAgendaService()
  const methods = useMentoringModel({
    createMentoringAgendaService,
  })

  return <MentoringView {...methods} />
}

export default MentoringPage
