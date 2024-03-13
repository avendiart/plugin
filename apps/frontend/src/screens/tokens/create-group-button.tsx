import { generateId } from '@fabric/domain'
import { forwardRef, useState } from 'react'
import { RxPlus } from 'react-icons/rx'
import { IconButton } from '../../components/icon-button'
import { Popover } from '../../components/popover'
import { PopoverContent } from '../../components/popover-content'
import { PopoverTrigger } from '../../components/popover-trigger'
import { useAppDispatch } from '../../state/hooks'
import {
  addItemToGroupAction,
  addItemToRootAction,
  createGroupAction,
} from '../../state/store/tokens'
import { CreateGroupForm } from './create-group-form'

type CreateGroupButtonProps = {
  parentId?: string
}

export const CreateGroupButton = forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements['button'] & CreateGroupButtonProps
>(function CreateGroupButton({ parentId, ...props }, ref) {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <PopoverTrigger asChild>
          <IconButton ref={ref} {...props}>
            <RxPlus className="h-4 w-4" />
          </IconButton>
        </PopoverTrigger>
      }
      content={
        <PopoverContent align="end" className="p-4">
          <CreateGroupForm
            onSubmit={data => {
              const id = generateId()
              dispatch(createGroupAction({ id, ...data }))
              if (parentId) {
                dispatch(addItemToGroupAction({ id, parentId }))
              } else {
                dispatch(addItemToRootAction({ id }))
              }
              setOpen(false)
            }}
          />
        </PopoverContent>
      }
    />
  )
})
