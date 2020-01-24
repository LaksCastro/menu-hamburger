export default (node, styles) => {
  Object.keys(styles).forEach(style => {
    node.style[style] = styles[style]
  })
}
