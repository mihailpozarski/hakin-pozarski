import logo from '../hakin_logo.png'
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
const { SubMenu } = Menu

const logo_style = {
  color: '#ffffff'
}

const NavBar = () => {
  return (
      <Row align="middle">
        <Col flex="150px" style={ logo_style }>
          <Link to="/">
            <img src={logo} alt="logo" width="50%"/>
          </Link>
        </Col>
        <Col flex="auto">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <SubMenu key="SubMenu" title="Productos">
            <Menu.ItemGroup title="Ejecicios">
                <Menu.Item key="bandas">
                  <Link to="/category/1">Gorros 1</Link>
                </Menu.Item>
                <Menu.Item key="bosu">
                  <Link to="/category/2">Gorros 2</Link>
                </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key={'store'}>Ayuda</Menu.Item>
        </Menu>
        </Col>
        <Col >
          <CartWidget/>
        </Col>
      </Row>
  );
}

export default NavBar;