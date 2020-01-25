import API from './api'
import defaultConfig from './defaultConfig'
import stateStyles from './stateStyles'
import setAttr from './utils/setAttr'
import setStyles from './utils/setStyles'

var config, rootElement, isOpened, container, after, before, line

const canUseDOM = () => {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

var apiListeners = {
  onInit: () => {},
  onToggle: () => {},
  onOpen: () => {},
  onClose: () => {},
  onDestroy: () => {},
}

const init = () => {
  container = document.createElement('div')
  after = document.createElement('div')
  before = document.createElement('div')
  line = document.createElement('div')

  container.appendChild(after)
  container.appendChild(before)
  container.appendChild(line)

  if (config.menuClassName) {
    setAttr(container, {
      className: config.menuClassName,
    })
  }
  if (config.menuIconClassName) {
    setAttr(after, {
      className: config.menuIconClassName,
    })
    setAttr(before, {
      className: config.menuIconClassName,
    })
    setAttr(line, {
      className: config.menuIconClassName,
    })
  }

  config.initOpened ? open() : close()

  rootElement.appendChild(container)
}

const toggle = () => {
  isOpened ? close() : open()
}

const open = () => {
  if (isOpened === true) return

  setStyles(container, stateStyles.open.styles.getContainerStyles(config))
  setStyles(after, stateStyles.open.styles.getAfterStyles(config))
  setStyles(before, stateStyles.open.styles.getBeforeStyles(config))
  setStyles(line, stateStyles.open.styles.getLineStyles(config))

  apiListeners.onOpen()
  apiListeners.onToggle()

  isOpened = true
}

const close = () => {
  if (isOpened === false) return

  setStyles(container, stateStyles.close.styles.getContainerStyles(config))
  setStyles(after, stateStyles.close.styles.getAfterStyles(config))
  setStyles(before, stateStyles.close.styles.getBeforeStyles(config))
  setStyles(line, stateStyles.close.styles.getLineStyles(config))

  apiListeners.onClose()
  apiListeners.onToggle()

  isOpened = false
}

const addEventListener = () => {
  container.addEventListener('click', toggle)
}

const on = (action, callback) => {
  switch (action) {
    case API.ON_INIT:
      apiListeners.onInit = callback
      break
    case API.ON_TOGGLE:
      apiListeners.onToggle = callback
      break
    case API.ON_OPEN:
      apiListeners.onOpen = callback
      break
    case API.ON_CLOSE:
      apiListeners.onClose = callback
      break
    case API.ON_DESTROY:
      apiListeners.onDestroy = callback
      break
    default:
      throw new Error('Invalid event listener :(')
  }
  apiListeners.onInit()
  apiListeners.onInit = () => {}
}

const off = (action, callback = () => {}) => {
  switch (action) {
    case API.ON_INIT:
      apiListeners.onInit = () => {}
      break
    case API.ON_TOGGLE:
      apiListeners.onToggle = () => {}
      break
    case API.ON_OPEN:
      apiListeners.onOpen = () => {}
      break
    case API.ON_CLOSE:
      apiListeners.onClose = () => {}
      break
    case API.ON_DESTROY:
      apiListeners.onDestroy = () => {}
      break
  }
  callback()
}
const destroy = () => {
  container.removeEventListener('click', config.initOpened ? open : close)
  setStyles(container, {
    display: 'none',
  })
  rootElement.removeChild(container)
  apiListeners.onInit = () => {}
  apiListeners.onToggle = () => {}
  apiListeners.onOpen = () => {}
  apiListeners.onClose = () => {}
  apiListeners.onDestroy()
  apiListeners.onDestroy = () => {}
}

const MenuHamburger = Object.freeze({
  initialize: userConfig => {
    if (!canUseDOM()) return

    config = Object.assign({}, defaultConfig, userConfig)

    if (!config.rootElement) throw new Error('Root element no provided :(')

    rootElement = config.rootElement

    init()
    addEventListener()

    return Object.freeze({
      on,
      off,
      open,
      close,
      toggle,
      destroy,
    })
  },
})

export default MenuHamburger
