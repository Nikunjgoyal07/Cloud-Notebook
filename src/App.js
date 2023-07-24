import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteArea from './components/NoteArea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Newnote" element={<NoteArea />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
