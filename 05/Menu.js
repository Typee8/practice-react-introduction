import React from "react";

const Menu = ({ items }) => {
  const listItems = items.map(item => {
    return item;
  })

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default Menu;