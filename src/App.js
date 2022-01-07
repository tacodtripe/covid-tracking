import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ThumbnailContainer from './components/thumbnailContainer';
import ThumbnailDetails from './components/thumbnailDetails';

function App() {
  return (
    <div className="appContainer container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<ThumbnailContainer />} />
        <Route path="thumbnailDetails" element={<ThumbnailDetails />} />
      </Routes>
    </div>
  );
}

export default App;
