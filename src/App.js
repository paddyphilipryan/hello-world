import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WHAT IS HAPPENING HERE

          This is a new change

          I will be making a new change

          I will be making a new change
        </a>
      </header>
    </div>
  );
}

export default App;
