import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteArea from './components/NoteArea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPageContent from './components/LandingPageContent';
import SignupPage from './components/SignupPage';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Signout from './components/signout';
import Notes from './NotesFolder/Notes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPageContent />} />
        <Route path="/Newnote" element={<NoteArea />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
