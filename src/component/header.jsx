import React from "react";
import { Button } from "antd";
import { DeleteOutlined, CaretDownOutlined } from "@ant-design/icons";
import Headers from "../block/header";
import Customer from "./customer";

class Header extends React.Component {
  render() {
    return (
      <Headers>
        <div className="header">
          <h2 className="text">Customer Management</h2>
          <div className="button">
            <div className="button1">
              <Button>
                <img src="/delete.png" />
              </Button>
            </div>
            <h4>
              <CaretDownOutlined /> Adam Smith
            </h4>
          </div>
        </div>
        <Customer />
      </Headers>
    );
  }
}

export default Header;
