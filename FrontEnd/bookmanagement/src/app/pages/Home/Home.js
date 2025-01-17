
import { Helmet } from "react-helmet";
import Footer from "./components/footer";
import PageHeader from "./components/header";
import Menu from "./components/menu";
import Services from "./components/services";
import SlideShow from "./components/slideshow";
import HomeProducts from "./components/HomeProducts";
import SideBar from "../../shared/components/sidebar";
var Home = () => {
  return (
    <>
      <Helmet>
        <title>Omely Home</title>
      </Helmet>
      <div className="container mt-4">
        <SlideShow/>
        <HomeProducts/>
        <Services/>
      </div>
    </>
  );
}
export default Home;