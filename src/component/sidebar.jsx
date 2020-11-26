import { Layout, Menu, Button } from "antd";
import "antd/dist/antd.css";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

import Headers from "../block/header";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Headers>
      <div className="container">
        <div className="image">
          <img className="image1" src="/Group.png" />
          <Button
            className="button-collapse"
            type="primary"
            // onClick={this.toggleCollapsed}
          >
            <img src="/open-menu.png" />
          </Button>
        </div>
        <Layout style={{ height: "100%", width: "240px" }}>
          <Sider>
            <div className="logo" />
            <Menu className="menu" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Dashboard
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<UserOutlined />}
                title="Smart Contract(SMCT)"
              >
                <Menu.Item key="3">SMCT Management</Menu.Item>
                <Menu.Item key="4">Deploy SMCT</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<UserOutlined />} title="Customer">
                <Menu.Item key="5">Customer Management</Menu.Item>
                <Menu.Item key="6">API</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<UserOutlined />} title="Settings">
                <Menu.Item key="7">Discount Management</Menu.Item>
                <Menu.Item key="8">Lisences Management</Menu.Item>
                <Menu.Item key="9">Account</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
        </Layout>
      </div>
    </Headers>
  );
};

export default Sidebar;
