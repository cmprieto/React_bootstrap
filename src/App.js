import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';  
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <Container className="p-4">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          <Button variant='danger'>Click</Button>
        
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">

          Learn React
        </a>
      </header>
    </Container>
  );
}

export default App;
