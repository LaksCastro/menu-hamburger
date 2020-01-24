export default (node, attributes) => {
  Object.keys(attributes).forEach(attr => {
    node[attr] = attributes[attr]
  })
}
