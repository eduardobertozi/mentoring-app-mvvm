import { Input } from '@/components/ui/input'
import { useMentoringModel } from './mentoring.model'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { ErrorMessage } from '@/components/error-message'
import Link from 'next/link'

type MentoringViewProps = ReturnType<typeof useMentoringModel>

export const MentoringView = (props: MentoringViewProps) => {
  return (
    <main className="grid place-items-center w-full h-screen">
      <Card className="w-[25rem]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">FalaDev Mentoria</CardTitle>
          <CardDescription>
            Olá! Junte-se a maior plataforma de mentorias para desenvolvedores
            do Brasil. Faça seu pré cadastro preenchendo o formulário abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            onSubmit={props.handleSubmit(props.onSubmit)}
          >
            <Label>Nome</Label>
            <Input type="text" placeholder="Nome" {...props.register('name')} />
            {props.errors.name && (
              <ErrorMessage>{props.errors.name.message}</ErrorMessage>
            )}

            <Label>E-mail</Label>
            <Input
              type="email"
              placeholder="E-mail"
              {...props.register('email')}
            />
            {props.errors.email && (
              <ErrorMessage>{props.errors.email.message}</ErrorMessage>
            )}

            <Label>Telefone</Label>
            <Input
              type="tel"
              placeholder="Telefone"
              {...props.register('phone')}
            />
            {props.errors.phone && (
              <ErrorMessage>{props.errors.phone.message}</ErrorMessage>
            )}

            <p className="text-sm text-zinc-600">
              Ou clice para{' '}
              <Link href="#" className="underline font-semibold">
                acessar a plataforma
              </Link>
            </p>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-none"
              type="submit"
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
