import { useMentoringModel } from './mentoring.model'

type MentoringViewProps = ReturnType<typeof useMentoringModel>

export const MentoringView = (props: MentoringViewProps) => {
  return (
    <main className="grid place-items-center w-full h-screen">
      <form
        className="flex flex-col gap-2 w-[20rem] p-4 rounded border"
        onSubmit={props.handleSubmit(props.onSubmit)}
      >
        <input type="text" placeholder="Nome" {...props.register('name')} />
        {props.errors.name && <p>{props.errors.name.message}</p>}

        <input type="email" placeholder="E-mail" {...props.register('email')} />
        {props.errors.email && <p>{props.errors.email.message}</p>}

        <input type="tel" placeholder="Telefone" {...props.register('phone')} />
        {props.errors.phone && <p>{props.errors.phone.message}</p>}

        <button type="submit" disabled={props.isSubmitting}>
          {props.isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

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
