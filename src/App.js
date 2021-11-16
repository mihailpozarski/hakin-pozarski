import './App.css';
import { Layout, Card } from 'antd';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Layout>
          <Header className="header">
            <NavBar></NavBar>
          </Header>
          <Content>
            <Card style={{ margin: '1em 1em', minHeight: '100px' }}>
              <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Kine Hakin 2021
          </Footer>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
