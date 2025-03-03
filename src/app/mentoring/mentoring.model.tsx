import { useState } from 'react'
import { RegistrationResult, SchemaMentoringType } from './mentoring.types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaMentoring } from './mentoring.schema'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { REGISTRATION_STATUS_MESSAGES } from './mentoring.messages'
import { ICreateMentoringScheduleService } from '../../services/mentoring/create-mentoring-schedule.service'
import { toast } from 'sonner'

type MentoringModelProps = {
  createMentoringScheduleService: ICreateMentoringScheduleService
}

export const useMentoringModel = ({
  createMentoringScheduleService,
}: MentoringModelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaMentoringType>({
    resolver: zodResolver(SchemaMentoring),
  })

  const { mutate } = useMutation<string, AxiosError, SchemaMentoringType>({
    mutationFn: async (data) => createMentoringScheduleService.execute(data),
    onError: () => {
      const { title, description, status } = REGISTRATION_STATUS_MESSAGES.error

      toast[status](title, {
        closeButton: true,
        description: description,
        className: 'bg-destructive',
      })
    },
    onSuccess: () => {
      const { title, description, status } =
        REGISTRATION_STATUS_MESSAGES.success

      toast[status](title, {
        closeButton: true,
        description: description,
        className: 'bg-emerald-600',
      })
    },
  })

  const onSubmit = (data: SchemaMentoringType) => {
    mutate(data)
  }

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit,
    onSubmit,
  }
}
