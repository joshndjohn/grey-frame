import { useState } from "react";
import { Nav, MenuBar, SideNav, Overlay } from "./NavBar.styles";
import NavLink from "../navlink/NavLink";
import Logo from "../logo/Logo";
import { sections } from "../../utils/constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav>
        <Logo />
        <ul>
          {sections.map((section) => (
            <NavLink key={section} section={section} />
          ))}
        </ul>
        <MenuBar
          onClick={onToggle}
          icon={`${isOpen ? "line-md:menu-to-close-alt-transition" : "jam:menu"}`}
        />
      </Nav>

      {/* Overlay closes sidebar on outside click */}
      <Overlay isOpen={isOpen} onClick={onToggle} />

      {/* Side-slider nav */}
      <SideNav isOpen={isOpen}>
        {/* Close icon inside sidebar */}
        <MenuBar
          icon="jam:close"
          onClick={onToggle}
          style={{ alignSelf: "flex-end" }}
        />
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setIsOpen(false)}
          >
            {section}
          </a>
        ))}
      </SideNav>
    </>
  );
};

export default NavBar;
