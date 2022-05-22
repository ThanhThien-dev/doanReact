import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Test from './components/test';

function App() {
  return (
    <div className='page-container'>
      <div className='container-wrap'>
        <Header />
        <Body />
      </div>
      <Test />
    </div>
  );
}

export default App;
