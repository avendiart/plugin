import { tokensGroupSchema } from '@fabric/domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

export function useCreateGroupForm() {
  const schema = useMemo(() => tokensGroupSchema.pick({ name: true }), [])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  })

  return {
    handleSubmit,
    errors,
    register,
  }
}
