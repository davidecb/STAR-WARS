import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import ItemListClass from '../ItemListClass';
import ItemListFunctional from '../ItemListFunctional';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/list-functional" component={ItemListFunctional} />
          <Route path="/list-class" component={ItemListClass} />
        </Switch>               
      </div>
    </BrowserRouter>
    
  );
}

export default App;

//<ItemListClass></ItemListClass> 
