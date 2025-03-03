import { ICreateMentoringScheduleService } from '@/services/mentoring/create-mentoring-schedule.service'
import { useMentoringModel } from './mentoring.model'
import { MentoringView } from './mentoring.view'
import { renderView } from '@/tests/render-view'
import { fireEvent, waitFor } from '@testing-library/dom'

const MockSuccessMentoringCreate: ICreateMentoringScheduleService = {
  execute: () => {
    return new Promise((resolve) => resolve('success'))
  },
}

const MakeSut = () => {
  const methods = useMentoringModel({
    createMentoringScheduleService: MockSuccessMentoringCreate,
  })
  return <MentoringView {...methods} />
}

describe('<MentoringPage />', () => {
  it('should be able show validation errors', async () => {
    const screen = renderView(<MakeSut />)

    const buttonSubmit = screen.getByTestId('button-submit')
    fireEvent.click(buttonSubmit) // faz o disparo de eventos na dom

    const formSubmit = screen.getByTestId('form-mentoring')
    await waitFor(() => formSubmit) // para eventos assíncronos na dom, sem isso não funciona

    const errorMessages = screen.getAllByTestId('error-message')

    expect(errorMessages).toHaveLength(3)
  })
})
