import {Switch, Route} from "wouter";
import './App.css';
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";
import BuscarPsicologo from "./Pages/BuscarPsicologo/BuscarPsicologo";
import SoyPsicologo from "./Pages/SoyPsicologo/SoyPsicologo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="BuscarPsicologo" component={BuscarPsicologo}></Route>
        <Route path="SoyPsicologo" component={SoyPsicologo}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
