import { LinkStyle } from "./NavLink.styles"

const NavLink = ({ section }) => {
  return (
    <li><LinkStyle href={`#${section}`}>{section}</LinkStyle></li>
  )
}

export default NavLink;