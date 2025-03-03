import { RegistrationResult, Status } from './mentoring.types'

export const REGISTRATION_STATUS_MESSAGES: Record<Status, RegistrationResult> =
  {
    success: {
      status: 'success',
      title: 'Bem vindo à plataforma!',
      description: 'Você vai receber um e-mail de confirmação em breve.',
    },
    error: {
      status: 'error',
      title: 'Oops...',
      description: 'Ocorreu um erro durante seu cadastro.',
    },
  }
