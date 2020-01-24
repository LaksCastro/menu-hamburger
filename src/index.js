import API from './api'
import defaultConfig from './defaultConfig'
import stateStyles from './stateStyles'
import setAttr from './utils/setAttr'
import setStyles from './utils/setStyles'

export default class MenuHamburger {
  constructor(config) {
    this.canUseDOM()
    if (!this.DOMIsAvailable) return

    this.config = Object.assign({}, defaultConfig, config)
    if (!this.config.rootElement) throw new Error('Root element no provided :(')

    this.rootElement = this.config.rootElement

    this.isOpened = config.initOpened

    this.apiListeners = {
      onInit: () => {},
      onToggle: () => {},
      onOpen: () => {},
      onClose: () => {},
    }

    this.init()
    this.addEventListener()
  }
  init = opened => {
    this.container = document.createElement('div')
    this.after = document.createElement('div')
    this.before = document.createElement('div')
    this.line = document.createElement('div')

    this.container.appendChild(this.after)
    this.container.appendChild(this.before)
    this.container.appendChild(this.line)

    if (this.config.menuClassName) {
      setAttr(this.container, {
        className: this.config.menuClassName,
      })
    }
    if (this.config.menuIconClassName) {
      setAttr(this.after, {
        className: this.config.menuIconClassName,
      })
      setAttr(this.before, {
        className: this.config.menuIconClassName,
      })
      setAttr(this.line, {
        className: this.config.menuIconClassName,
      })
    }

    this.isOpened ? this.open() : this.close()

    this.rootElement.appendChild(this.container)
  }
  addEventListener = () => {
    this.container.addEventListener('click', this.toggle)
  }
  toggle = () => {
    this.isOpened ? this.close() : this.open()
    this.isOpened = !this.isOpened
  }
  open = () => {
    setStyles(
      this.container,
      stateStyles.open.styles.getContainerStyles(this.config)
    )
    setStyles(this.after, stateStyles.open.styles.getAfterStyles(this.config))
    setStyles(this.before, stateStyles.open.styles.getBeforeStyles(this.config))
    setStyles(this.line, stateStyles.open.styles.getLineStyles(this.config))
    this.apiListeners.onOpen()
    this.apiListeners.onToggle()
  }
  close = () => {
    setStyles(
      this.container,
      stateStyles.close.styles.getContainerStyles(this.config)
    )
    setStyles(this.after, stateStyles.close.styles.getAfterStyles(this.config))

    setStyles(
      this.before,
      stateStyles.close.styles.getBeforeStyles(this.config)
    )
    setStyles(this.line, stateStyles.close.styles.getLineStyles(this.config))
    this.apiListeners.onClose()
    this.apiListeners.onToggle()
  }
  on = (action, callback) => {
    switch (action) {
      case API.ON_INIT:
        this.apiListeners.onInit = callback
        break
      case API.ON_TOGGLE:
        this.apiListeners.onToggle = callback
        break
      case API.ON_OPEN:
        this.apiListeners.onOpen = callback
        break
      case API.ON_CLOSE:
        this.apiListeners.onClose = callback
        break
    }
    this.apiListeners.onInit()
    this.apiListeners.onInit = () => {}
  }
  off = (action, callback = () => {}) => {
    switch (action) {
      case API.ON_INIT:
        this.apiListeners.onInit = () => {}
        break
      case API.ON_TOGGLE:
        this.apiListeners.onToggle = () => {}
        break
      case API.ON_OPEN:
        this.apiListeners.onOpen = () => {}
        break
      case API.ON_CLOSE:
        this.apiListeners.onClose = () => {}
        break
    }
    callback()
  }
  destroy = () => {
    this.container.removeEventListener('click')
    setStyles(this.container, {
      display: 'none',
    })
    this.rootElement.removeChild(this.container)
    this.apiListeners.onInit = () => {}
    this.apiListeners.onToggle = () => {}
    this.apiListeners.onOpen = () => {}
    this.apiListeners.onClose = () => {}
  }
  canUseDOM = () => {
    this.DOMIsAvailable =
      typeof window !== 'undefined' && typeof window.document !== 'undefined'
  }
}
