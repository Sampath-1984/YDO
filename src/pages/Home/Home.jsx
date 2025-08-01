import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.css";
import refreshIcon from "../../assets/Home/refreshIcon.png";
import heartIcon from "../../assets/Home/heartIcon.png";
import pass from "../../assets/Home/pass.png";
import EmblaCarousel from "../../components/infinite-carousel/EmblaCarousel";
import MobNav from "../../components/mobile-nav/MobNav.jsx";
import MobFoot from "../../components/mobile-footer/MobFoot.jsx";
import MobCarousel from "../../components/mobile-carousel/MobCarousel.jsx";
import "@fontsource/sacramento";

const Home = () => {
  return (
    <>
      <div className="mobile">
        <MobNav />
        <div className="main--mobile">
          <div className="text-wrapper--mobile">
            <h2 className="text--mobile">
              Ready to make <br /> someone
              <br /> blush today?🥰
            </h2>
          </div>
          <MobCarousel />
          <div className="icons--mob">
            <div className="pass-icon--mob">
              <img src={pass} alt="pass" className="pass-icon__image--mob" />
            </div>
            <div className="smash--mob">
              <img src={heartIcon} alt="smash" className="smash__image--mob" />
            </div>
            <div className="refresh--mob">
              <img
                src={refreshIcon}
                alt="refresh"
                className="refresh__image--mob"
              />
            </div>
          </div>
        </div>
        <MobFoot />
      </div>
      <div className="desktop">
        <Navbar />
        <div className="main">
          <div className="text-wrapper">
            <h2 className="text">Ready to make someone blush today?🥰</h2>
          </div>
          <EmblaCarousel />
          <div className="icons">
            <div className="pass-icon">
              <img src={pass} alt="pass" className="pass-icon__image" />
            </div>
            <div className="smash">
              <img src={heartIcon} alt="smash" className="smash__image" />
            </div>
            <div className="refresh">
              <img src={refreshIcon} alt="refresh" className="refresh__image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
