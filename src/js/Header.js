import { cecl } from "./Helpers/domHelper"

export const Header = (parentDiv) => {
  let header = cecl('div', 'header')
  let name = cecl("a", "name-plate")
  name.innerText = "Mick Roth"
  name.href = "index.html"

  header.appendChild(name)
  return header
  // ce("a", 'name-plate', header, { innerText: "Mick Roth", href:'index.html' })
  // ce("div", "occupation", header, { innerText: "software engineer" })
}
