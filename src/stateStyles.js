const commonStyles = config => ({
  width: '50%',
  height: `${config.lineWidth}px`,
  position: 'absolute',
  transition: config.transition,
  transform: 'translate(-50%, -50%)',
  initOpened: false,
  backgroundColor: config.iconColor,
})
const commonContainerStyles = config => ({
  width: `${config.size}px`,
  height: `${config.size}px`,
  position: 'relative',
  transition: config.transition,
  cursor: 'pointer',
  backgroundColor: config.backgroundColor,
  borderRadius: config.borderRadius,
})
export default {
  close: {
    key: 'close',
    styles: {
      getContainerStyles: config => ({
        ...commonContainerStyles(config),
      }),
      getAfterStyles: config => ({
        ...commonStyles(config),
        top: '70%',
        left: '50%',
      }),
      getBeforeStyles: config => ({
        ...commonStyles(config),
        top: '30%',
        left: '50%',
      }),
      getLineStyles: config => ({
        ...commonStyles(config),
        top: '50%',
        left: '50%',
        opacity: '1',
        visibility: 'visible',
      }),
    },
  },
  open: {
    key: 'open',
    styles: {
      getContainerStyles: config => ({
        ...commonContainerStyles(config),
      }),
      getAfterStyles: config => ({
        ...commonStyles(config),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(-45deg)',
      }),
      getBeforeStyles: config => ({
        ...commonStyles(config),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
      }),
      getLineStyles: config => ({
        ...commonStyles(config),
        top: '50%',
        left: '50%',
        transform: 'translate(50%, -50%)',
        opacity: '0',
        visibility: 'hidden',
      }),
    },
  },
}
