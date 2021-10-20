import logo from '../hakin_logo.png'
import { Menu, Row, Col } from "antd";
import CartWidget from './CartWidget';
const { SubMenu } = Menu

const logo_style = {
  color: '#ffffff'
}

const NavBar = () => {
  return (
    <Row align="middle">
      <Col flex="150px" style={ logo_style }>
        <img src={logo} alt="logo" width="50%"/>
      </Col>
      <Col flex="auto">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <SubMenu key="SubMenu" title="Productos">
          <Menu.ItemGroup title="Ejecicios">
            <Menu.Item key="bandas">Bandas Elasticas</Menu.Item>
            <Menu.Item key="bosu">Bosu</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Lesiones">
            <Menu.Item key="tobilleras">Tobilleras</Menu.Item>
            <Menu.Item key="muñequeras">Muñequeras</Menu.Item>
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