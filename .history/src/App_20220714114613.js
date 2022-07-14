
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import { HomePage, About, News, Error } from './pages'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/*" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
