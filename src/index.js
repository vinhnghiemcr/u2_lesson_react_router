import { BrowserRouter as Router  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
// import BrowserRouter with { destructuring } here

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);


