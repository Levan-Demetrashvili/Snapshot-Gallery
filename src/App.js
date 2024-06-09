import Header from "./components/Header";
import SearchPictures from "./components/SearchPictures";
import NavMenu from "./components/NavMenu";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className='container'>
      <Header />
      <SearchPictures />
      <NavMenu />
      <Gallery />
    </div>
  );
}
