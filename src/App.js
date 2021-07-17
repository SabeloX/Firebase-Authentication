import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
      </Router>
    </div>
  );
}

export default App;
