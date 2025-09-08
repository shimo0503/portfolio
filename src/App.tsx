import Footer from './components/Footer';
import Header from './components/Header';
import Aboutme from './components/Section/Aboutme';
import Career from './components/Section/Career';
import Products from './components/Section/Products';
import Skills from './components/Section/Skills';

const App = () => {
  return (
    <div>
      <Header />
      <Aboutme />
      <Career />
      <Skills />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
