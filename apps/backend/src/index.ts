import { BackendMessage, FrontendMessage } from '@fabric/messages'

figma.showUI(__html__, {
  themeColors: true,
  width: 920,
  height: 640,
  title: 'Fabric',
})

figma.ui.onmessage = async (message: FrontendMessage) => {
  if (message.type === 'state-updated') {
    figma.root.setPluginData('state', JSON.stringify(message.payload))
  }
  if (message.type === 'resize') {
    figma.ui.resize(
      Math.floor(message.payload.clientX),
      Math.floor(message.payload.clientY),
    )
    figma.clientStorage.setAsync('windowSize', {
      width: Math.floor(message.payload.clientX),
      height: Math.floor(message.payload.clientY),
    })
  }
}

figma.on('run', async () => {
  const windowSize = await figma.clientStorage.getAsync('windowSize')
  if (windowSize) {
    figma.ui.resize(windowSize.width, windowSize.height)
  }

  const stateJSON = figma.root.getPluginData('state')
  if (stateJSON) {
    const state = JSON.parse(stateJSON)
    figma.ui.postMessage({
      type: 'state-loaded',
      state,
    } satisfies BackendMessage)
  }
})
