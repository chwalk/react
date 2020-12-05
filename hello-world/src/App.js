import logo from './logo.svg';
import Books from './Books';
import MyFirstAPIComponent from './MyFirstAPIComponent';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const items = [...Array(100)].map((val, i) => `Item ${i}`);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Cary was here.</p>
        <Books/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <MyFirstAPIComponent/>
      <div className="container">
        <div className="left-col">
          Left col
        </div>
        
        <div className="center-col">
          <span>List</span>
          <ul>
            {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
          </ul>
        </div>
        
        <div className="right-col">
          Right col
        </div>
      </div>
    </div>
  );
}

export default App;
