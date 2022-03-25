import React from "react";
import { Link, Outlet } from "react-router-dom";
import { data } from "../../utils/sidebar";
import { Menus, Wrap } from "./style";

export const Sidebar = () => {
  const { SubMenu } = Menus;

  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div style={{ display: "flex" }}>
      <Wrap>
        <Menus
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          {data.map((value) => {
            return (
              <SubMenu key={value.id} icon={<value.Icon />} title={value.title}>
                {value.Child.map((e) => {
                  return (
                    <Link key={e.id} to={e.params}>
                      <Menus.Item key={e.id}>{e.title}</Menus.Item>;
                    </Link>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menus>
      </Wrap>
      <Outlet />
    </div>
  );
};
