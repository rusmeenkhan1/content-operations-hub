/**
 * @param {string} tag
 * @param {string} [className]
 * @param {string} [text]
 */
// eslint-disable-next-line import/prefer-default-export
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}
