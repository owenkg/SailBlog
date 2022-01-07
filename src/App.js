import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/pages/landing';
import BlogsPage from './components/pages/blogsPage';
import AddPage from './components/pages/addPage';
import ViewPage from './components/pages/viewPage';
import DeletePage from './components/pages/deletePage';
import UpdatePage from './components/pages/updatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
