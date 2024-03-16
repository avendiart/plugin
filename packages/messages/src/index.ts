import { Tokens } from '@fabric/domain'

export type StateLoadedMessage = {
  type: 'state-loaded'
  state: {
    tokens: Tokens
  }
}

export type StateUpdatedMessage = {
  type: 'state-updated'
  payload: {
    tokens: Tokens
  }
}

export type ResizingMessage = {
  type: 'resize'
  payload: {
    clientX: number
    clientY: number
  }
}

export type BackendMessage = StateLoadedMessage
export type FrontendMessage = StateUpdatedMessage | ResizingMessage
