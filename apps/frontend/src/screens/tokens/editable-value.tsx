import { useCallback, useEffect, useState } from 'react'

type EditableValueProps = {
  value: string
  onChange?: (value: string) => unknown
}

export function EditableValue({ value, onChange }: EditableValueProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const update = useCallback(
    (value: string) => {
      setIsEditing(false)
      if (onChange) {
        onChange(value)
      }
    },
    [onChange],
  )

  return !isEditing ? (
    <span className="block w-full" onClick={() => setIsEditing(true)}>
      {value}
    </span>
  ) : (
    <input
      autoFocus
      value={currentValue}
      className="w-full border-none bg-transparent opacity-75 outline-none"
      onChange={event => setCurrentValue(event.currentTarget.value)}
      onBlur={() => {
        update(currentValue)
      }}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          update(currentValue)
        }
      }}
    />
  )
}
