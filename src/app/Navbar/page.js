"use client";

import React from "react";
import style from "./header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Products", url: "/products" },
  {
    title: "Pages +",
    url: "/page",
    sublinks: [
      { sublink: "about", url: "/page" },
      { sublink: "blog", url: "/page" },
    ],
  },
  { title: "Contact", url: "/contact" },
  {
    title: "Account +",
    url: "/page",
    sublinks: [
      { sublink: "Login", url: "/page" },
      { sublink: "Register", url: "/page" },
    ],
  },
];

const Page = () => {
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const toggleSearchForm = () => {
    setSearchFormVisible(!isSearchFormVisible);
  };

  return (
    <>
      <header className={`${style.header}`}>
        <Link href={`/`} className={`${style.logo}`}>
          Logo
        </Link>
        <nav className={`${style.navbar} hidden md:flex`}>
          <ul>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
                {item.sublinks && (
                  <ul>
                    {item.sublinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subLink.url}>{subLink.sublink}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${style.icons} `}>
          <div className="flex md:hidden">
            <FontAwesomeIcon icon={faBars} width={30} />
          </div>
          <div onClick={toggleSearchForm}>
            <FontAwesomeIcon icon={faSearch} width={30} />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} width={30} />
          </div>
        </div>
        {isSearchFormVisible && (
          <form className={`${style.searchForm}`}>
            <input
              className={`${style.input}`}
              type="search"
              placeholder="escreva sua pesquisa ..."
            />
            <label for="search-box" className={`${style.label}`}>
              <FontAwesomeIcon icon={faSearch} width={30} />
            </label>
          </form>
        )}
      </header>
    </>
  );
};

export default Page;
