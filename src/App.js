import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/sidebar.jsx";
import { Row, Col } from "antd";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Row>
        <Col flex="240px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Header />
        </Col>
      </Row>
      ,
    </div>
  );
}

export default App;
