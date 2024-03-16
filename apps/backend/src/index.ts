import { BackendMessage, FrontendMessage } from '@fabric/messages'

figma.showUI(__html__, {
  themeColors: true,
  width: 920,
  height: 640,
})

figma.ui.onmessage = async (message: FrontendMessage) => {
  if (message.type === 'state-updated') {
    figma.clientStorage.setAsync('state', message.payload)
  }
  if (message.type === 'resize') {
    figma.ui.resize(
      Math.floor(message.payload.clientX),
      Math.floor(message.payload.clientY),
    )
  }
}

figma.clientStorage.getAsync('state').then(state => {
  figma.ui.postMessage({ type: 'state-loaded', state } satisfies BackendMessage)
})
