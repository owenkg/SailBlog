import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/pages/landing';
import BlogsPage from './components/pages/blogsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/blog" element={<BlogsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
