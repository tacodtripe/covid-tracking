import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Navbar from './components/navbar';
import ThumbnailContainer from './components/thumbnailContainer';
import ThumbnailDetails from './components/thumbnailDetails';

function App() {
  // const data = useSelector((state) => state.dataReducer);
  return (
    <div className="appContainer container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<ThumbnailContainer />} />
        <Route
          path="thumbnailDetails"
          element={(
            <ThumbnailDetails
              country="demo country"
              flag="https://disease.sh/assets/img/flags/us.png"
              cases={100}
              todayCases={14}
              deaths={23}
              todayDeaths={3}
              recovered={122}
              todayRecovered={12}
              active={321}
              critical={40}
              population={12312312132}
            />
)}
        />
      </Routes>
    </div>
  );
}

export default App;
