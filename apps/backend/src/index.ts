import { BackendMessage, FrontendMessage } from '@fabric/messages'

figma.showUI(__html__, {
  width: 920,
  height: 640,
})

figma.ui.onmessage = async (message: FrontendMessage) => {
  if (message.type === 'state-updated') {
    figma.clientStorage.setAsync('state', message.payload)
  }
}

figma.clientStorage.getAsync('state').then(state => {
  figma.ui.postMessage({ type: 'state-loaded', state } satisfies BackendMessage)
})
