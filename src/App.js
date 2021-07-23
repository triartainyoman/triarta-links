import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import links from './links';

function App() {
  function createCardLink(link) {
    return <Button name={link.name} link={link.link} />
  }

  return (
    <div className="App">
      <Header />
      <div className="App-feature">
        {links.map(createCardLink)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
