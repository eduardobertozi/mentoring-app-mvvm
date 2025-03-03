'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { api } from '@/lib/api'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

export type Status = 'error' | 'success'

export type RegistrationResult = {
  title: string
  description: string
  status: Status
}

export const SchemaMentoring = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
    .max(50, { message: 'Nome deve ter no máximo 50 caracteres' })
    .trim(),
  email: z.string().email({ message: 'E-mail inválido' }).trim(),
  phone: z
    .string()
    .min(10, { message: 'Telefone deve ter no mínimo 10 caracteres' })
    .max(15, { message: 'Telefone deve ter no máximo 15 caracteres' })
    .regex(/^\d+$/, { message: 'Telefone deve conter apenas números' })
    .trim(),
})

export type SchemaMentoringType = z.infer<typeof SchemaMentoring>

const MentoringPage = () => {
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
    onError: () => {
      setAlert({
        status: 'error',
        title: 'Oops...',
        description: 'Ocorreu um erro durante seu cadastro.',
      })
    },
    onSuccess: () => {
      setAlert({
        status: 'success',
        title: 'Bem vindo à plataforma!',
        description: 'Você vai receber um e-mail de confirmação em breve.',
      })
    },
  })

  const onSubmit = (data: SchemaMentoringType) => {
    mutate(data)
  }

  return (
    <main className="grid place-items-center w-full h-screen">
      <form
        className="flex flex-col gap-2 w-[20rem] p-4 rounded border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" placeholder="Nome" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="email" placeholder="E-mail" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <input type="tel" placeholder="Telefone" {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {alert && (
        <div
          className={`${
            alert.status === 'success'
              ? 'bg-green-100 text-green-900'
              : 'bg-red-100 text-red-900'
          } p-4 rounded mt-4`}
        >
          <h2 className="text-lg font-semibold">{alert.title}</h2>
          <p>{alert.description}</p>
        </div>
      )}
    </main>
  )
}

export default MentoringPage
