
const domInjector = (htmlElement) => {
  let outputSection = document.querySelector(".output")
  outputSection.appendChild(htmlElement)
  return outputSection
}

export default domInjector