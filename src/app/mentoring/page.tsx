'use client'

import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'

const MentoringPage = () => {
  const methods = useMentoringModel()

  return <MentoringView {...methods} />
}

export default MentoringPage
