import logo from "./logo.svg";
import Row from "./Row";
import Footer from "./Footer";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./App.css";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />*
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOrignals}
          isLargeRow
        ></Row>
        <Row
          title="Trending now"
          fetchUrl={requests.fetchTrending}
          isLargeRow
        ></Row>
        {/* */}
        <Row //title="Top Rated"
          fetchUrl={requests.topRated}
          isLargeRow
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.actionMovies}
          isLargeRow
        ></Row>
        <Row
          title="Comedy Movies"
          fetchUrl={requests.comedyMovies}
          isLargeRow
        ></Row>
        <Row
          title="Horror Movies"
          fetchUrl={requests.horrorMovies}
          isLargeRow
        ></Row>
        <Row
          title="Romance Movies"
          fetchUrl={requests.romanceMovies}
          isLargeRow
        ></Row>
        <Row
          title="Documentaries"
          fetchUrl={requests.documentaries}
          isLargeRow
        ></Row>
        <Row title="UpComing" fetchUrl={requests.upComing} isLargeRow></Row>
        <Row title="Popular" fetchUrl={requests.Popular} isLargeRow></Row>
      </div>

      <Footer />
    </div>
  );
}

export default App;
