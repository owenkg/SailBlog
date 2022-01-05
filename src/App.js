import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/pages/landing';
import BlogsPage from './components/pages/blogsPage';
import AddPage from './components/pages/addPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/blog" element={<BlogsPage/>}/>
        <Route path="/add" element={<AddPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
