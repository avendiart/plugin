import { generateId } from '@fabric/domain'
import { useState } from 'react'
import { RxPlus } from 'react-icons/rx'
import { IconButton } from '../../components/icon-button'
import { Popover } from '../../components/popover'
import { PopoverContent } from '../../components/popover-content'
import { PopoverTrigger } from '../../components/popover-trigger'
import { useAppDispatch } from '../../state/hooks'
import {
  addItemToRootAction,
  createGroupAction,
} from '../../state/store/tokens'
import { CreateGroupForm } from './create-group-form'

export function CreateGroupButton() {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={
        <PopoverTrigger asChild>
          <IconButton>
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
              dispatch(addItemToRootAction({ id }))
              setOpen(false)
            }}
          />
        </PopoverContent>
      }
    />
  )
}
