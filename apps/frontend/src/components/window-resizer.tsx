import { ResizingMessage } from '@fabric/messages'
import throttle from 'lodash.throttle'
import { useCallback, useState } from 'react'

export function WindowResizer() {
  const [resizing, setResizing] = useState(false)

  const resize = useCallback(
    throttle((clientX: number, clientY: number) => {
      parent.postMessage(
        {
          pluginMessage: {
            type: 'resize',
            payload: {
              clientX,
              clientY,
            },
          } satisfies ResizingMessage,
        },
        '*',
      )
    }, 1000 / 120),
    [],
  )

  return (
    <div
      className="fixed bottom-0 right-0 h-4 w-4 cursor-se-resize"
      onPointerMove={event => {
        if (resizing) {
          resize(event.clientX, event.clientY)
        }
      }}
      onPointerDown={event => {
        event.currentTarget.setPointerCapture(event.pointerId)
        setResizing(true)
      }}
      onPointerUp={event => {
        event.currentTarget.releasePointerCapture(event.pointerId)
        setResizing(false)
      }}
    />
  )
}
