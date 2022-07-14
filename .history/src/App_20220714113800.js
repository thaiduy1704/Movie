
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { HomePage, About, News } from './pages'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" />
      </Routes>
    </Router>
  );
}

export default App;
