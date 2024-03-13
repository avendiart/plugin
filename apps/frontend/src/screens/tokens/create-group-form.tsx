import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { useCreateGroupForm } from './use-create-group-form'

type CreateGroupFormProps = {
  onSubmit: (data: { name: string }) => unknown
}

export function CreateGroupForm({ onSubmit }: CreateGroupFormProps) {
  const { register, handleSubmit } = useCreateGroupForm()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-[1fr_auto] items-center gap-2"
    >
      <Input {...register('name')} />
      <Button>Create</Button>
    </form>
  )
}
