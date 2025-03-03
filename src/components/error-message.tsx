type ErrorMessageProps = React.ComponentProps<'p'>

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className="text-sm text-destructive" {...props} />
}
