import React from "react";
import { Logo, LogoIcon, CustomLink } from "./NavigationStyles";

export default function NavLogo() {
  return (
    <Logo>
      <CustomLink to="/">
        <LogoIcon />
        <span>TiemeNdo</span>
      </CustomLink>
    </Logo>
  );
}
