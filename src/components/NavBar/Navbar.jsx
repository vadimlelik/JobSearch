import React from "react";
import { ReactComponent as Logo } from "./icon/logo.svg";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.container}>
        <Logo className={style.Logo} />

        <nav className="menu">
          <ul className={style.MenuList}>
            <li className={style.MenuItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? [style.active] : [style.MenuLink]
                }
                to="/"
              >
                Поиск Вакансий{" "}
              </NavLink>
            </li>
            <li className={style.MenuItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? [style.active] : [style.MenuLink]
                }
                to="/favorites"
              >
                Избранное
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
