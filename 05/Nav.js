import React from "react";
import Menu from "./Menu.js";
import MenuItem from "../03/MenuItem.js";

class Nav extends React.Component {
  render() {
    const arr = [
      <MenuItem text={"strona główna"} url = {'/'}/>,
      <MenuItem text={"www"} url = {'/www'}/>,
    ];

    return (
      <nav>
        <Menu items={arr}/>
      </nav>
    );
  }
}

export default Nav;