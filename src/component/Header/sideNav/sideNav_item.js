import React from "react";
import style from "./sideNav.module.css";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";

const SideNavItem = () => {
  const items = [
    {
      type: style.option,
      icon: "home",
      text: "Home",
      link: "/"
    },
    {
      type: style.option,
      icon: "file-text-o",
      text: "News",
      link: "/news"
    },
    {
      type: style.option,
      icon: "play",
      text: "Videos",
      link: "/videos"
    },
    {
      type: style.option,
      icon: "sign-in",
      text: "Sign in",
      link: "/sign-in"
    },
    {
      type: style.option,
      icon: "sign-out",
      text: "Sign out",
      link: "/sign-out"
    }
  ];

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      );
    });   
  };

  return <div>{showItems()}</div>;
};

export default SideNavItem;
