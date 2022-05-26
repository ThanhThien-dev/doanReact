import './App.css';
import './Body.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className='page-container'>
      <div className='container-wrap'>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
