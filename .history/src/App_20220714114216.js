
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { HomePage, About, News } from './pages'




function App() {
  return (
    <Router>
    
   
        fgxhxfgfgtxdfgxgf
        <Route path="/" element={HomePage} />
        <Route path="/about" element={About} />
        <Route path="/news" element={News} />
      </Routes>
    </Router>
  );
}

export default App;
