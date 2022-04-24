import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Layout
        header={
          <Header></Header>
        }
        menu={<Menu></Menu>}
        intro={<Intro></Intro>}
        content={<Main></Main>}
        footer={<Footer></Footer>}

      ></Layout>
    </div>
  );
}

export default App;
