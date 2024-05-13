import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

interface MenuItem {
  id: number;
  title: string;
  link: String;
}

const items: MenuItem[] = [
  {
    id: 0,
    title: "connectly",
    link: "/",
  },
  {
    id: 1,
    title: "agent",
    link: "/profile",
  },
  {
    id: 2,
    title: "dashboard",
    link: "/dashboard",
  },
  {
    id: 3,
    title: "chat",
    link: "/chat",
  },
  {
    id: 4,
    title: "megaphone",
    link: "/edit",
  },
  {
    id: 5,
    title: "settings",
    link: "/settings",
  },
];

function Navbar() {
  const [active, setActive] = useState(4);
  let settigsIndex = items.length - 1;
  return (
    <div className="navbar">
      <div className="navbar-left">
        {items.map((item, index) => {
          if (index < settigsIndex) {
            return (
              <Link to={String(item.link)} key={index}>
                <div
                  style={{ padding: "15px" }}
                  className={index === active ? "item-active" : ""}
                  onClick={() => setActive(index)}
                >
                  <img
                    src={"./" + item.title + ".png"}
                    width={16}
                    height={16}
                  ></img>
                </div>
              </Link>
            );
          }
        })}
      </div>

      <Link to={String("/settings")} key={settigsIndex}>
        <div
          style={{ padding: "15px" }}
          className={settigsIndex === active ? "item-active" : ""}
          onClick={() => setActive(settigsIndex)}
        >
          <img src={"./settings.png"} width={16} height={16}></img>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
