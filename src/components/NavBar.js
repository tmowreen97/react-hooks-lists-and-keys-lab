import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const list = links.map((links)=> {
    return <a key={links} href={'#'+links}>{links}</a>
  })

  return <nav>{list}</nav>;
}

export default NavBar;
