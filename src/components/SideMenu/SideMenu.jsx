import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SideMenu({ onLogout }) {
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    if (item.key === "/logout") {
      onLogout();
    } else {
      navigate(item.key);
    }
  };

  return (
    <div className="SideMenu">
      <Menu
        onClick={handleMenuItemClick}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreOutlined />
          },
          {
            label: "Inventário",
            key: "/inventory",
            icon: <ShopOutlined />
          },
          {
            label: "Pedidos",
            key: "/orders",
            icon: <ShoppingCartOutlined />
          },
          {
            label: "Usuário",
            key: "/user",
            icon: <UserOutlined />
          },
          {
            label: "Logout",
            key: "/logout",
            icon: <LogoutOutlined />
          },
        ]}
      />
    </div>
  );
}

export default SideMenu;
