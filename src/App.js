import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import Trending from './components/Trending/Trending'
import {API_KEY,ImageUrl} from './components/constants/constants'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost
        title={"Netflix Originals"}
        link={`/discover/tv?api_key=${API_KEY}&with_networks=213`}
      />
      <Trending
        title={"Trending"}
        link={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
      />
      <RowPost
        title={"Action"}
        link={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <RowPost
        title={"Documentary"}
        link={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
      />
      <RowPost
        title={"Horror"}
        link={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <RowPost
        title={"Romance"}
        link={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
      <RowPost
        title={"Box Office Hits"}
        link={`/discover/movie?api_key=${API_KEY}&with_genres=35'`}
      />
    </div>
  );
}

export default App;
