import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "drugs", text: "drugs" },
 
];

const NavLinks = () => {
  return (
    <Fragment>
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </Fragment>
  )
}

export default NavLinks