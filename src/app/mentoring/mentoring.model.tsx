import { useState } from 'react'
import { RegistrationResult, SchemaMentoringType } from './mentoring.types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaMentoring } from './mentoring.schema'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { api } from '@/lib/api'
import { REGISTRATION_STATUS_MESSAGES } from './mentoring.messages'

export const useMentoringModel = () => {
  const [alert, setAlert] = useState<RegistrationResult | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaMentoringType>({
    resolver: zodResolver(SchemaMentoring),
  })

  const { mutate } = useMutation<string, AxiosError, SchemaMentoringType>({
    mutationFn: async (data) => {
      const response = await api.post('/events', data)
      return response.data
    },
    onError: () => setAlert(REGISTRATION_STATUS_MESSAGES.error),
    onSuccess: () => setAlert(REGISTRATION_STATUS_MESSAGES.success),
  })

  const onSubmit = (data: SchemaMentoringType) => {
    mutate(data)
  }

  return {
    alert,
    errors,
    isSubmitting,
    register,
    handleSubmit,
    onSubmit,
  }
}
