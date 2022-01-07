import './App.css';
import Navbar from './components/navbar';
import ThumbnailContainer from './components/thumbnailContainer';

function App() {
  return (
    <div className="appContainer container-fluid">
      <Navbar />
      <ThumbnailContainer />
    </div>
  );
}

export default App;
