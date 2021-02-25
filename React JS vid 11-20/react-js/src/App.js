import logo from './logo.svg';
import './App.css';
import Kontak from './pages/Kontak.js';
import Nav from './pages/Nav.js';
import Sejarah from './pages/Sejarah.js';
import Tentang from './pages/Tentang.js';
import Home from './pages/Home.js';
import Siswa from './pages/Siswa.js';
import Menu from './pages/Menu.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
        <Switch>
          <Route path = '/' component = {Home} exact />
          <Route path = '/kontak' component = {Kontak} />
          <Route path = '/sejarah' component = {Sejarah} />
          <Route path = '/tentang' component = {Tentang} />
          <Route path = '/siswa' component = {Siswa} />
          <Route path = '/menu' component = {Menu} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
