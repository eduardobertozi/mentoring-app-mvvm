import { Input } from '@/components/ui/input'
import { useMentoringModel } from './mentoring.model'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { ErrorMessage } from '@/components/error-message'

type MentoringViewProps = ReturnType<typeof useMentoringModel>

export const MentoringView = (props: MentoringViewProps) => {
  return (
    <main className="grid place-items-center w-full h-screen">
      <Card className="w-[25rem]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">FalaDev Mentoria</CardTitle>
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

      {props.alert && (
        <div
          className={`${
            props.alert.status === 'success'
              ? 'bg-green-100 text-green-900'
              : 'bg-red-100 text-red-900'
          } p-4 rounded mt-4`}
        >
          <h2 className="text-lg font-semibold">{props.alert.title}</h2>
          <p>{props.alert.description}</p>
        </div>
      )}
    </main>
  )
}
