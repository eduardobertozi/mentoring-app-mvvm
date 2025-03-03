import { ErrorMessage as ErrorMessageHookForm } from '@hookform/error-message'

type ErrorMessageProps = React.ComponentProps<typeof ErrorMessageHookForm>

export const ErrorMessage = ({ errors, name }: ErrorMessageProps) => {
  const existError = errors && Object.keys(errors).includes(name)

  return (
    <>
      {existError && (
        <p className="text-sm text-destructive" data-testid="error-message">
          {errors[name].message}
        </p>
      )}
    </>
  )
}
