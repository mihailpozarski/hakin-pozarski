import './App.css';
import { Layout, Card } from 'antd';
import NavBar from './components/NavBar';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="header">
          <NavBar></NavBar>
        </Header>
        <Content>
          <Card style={{ margin: '1em 1em' }}>
            Content
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Kine Hakin 2021</Footer>
      </Layout>
    </>
  );
}

export default App;
