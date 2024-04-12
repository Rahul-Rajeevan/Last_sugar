import React from "react";
import Carousal from "../../common/Carousal/Carousal.jsx";
import image1 from "../../../assets/images/Carousal/C1/image.png";
import image2 from "../../../assets/images/Carousal/C1/image1.png";
import image3 from "../../../assets/images/Carousal/C1/image2.png";
import image4 from "../../../assets/images/Carousal/C1/image3.png";
import Navbar from "../../common/Navbar/Navbar";
import Pink from "../../common/Pink_bar_text/Pink.jsx";
import banner from "../../../assets/images/Landing/banner.png";
import banner2 from "../../../assets/images/Landing/banner2.png";
import styles from "./Landing.module.css";
import ProductCards from "../../common/ProductCards/ProductCards.jsx";
import Imagecards from "../../common/Imagecards/Imagecards.jsx";
import image12 from "../../../assets/images/image_cards/image.png";
import image22 from "../../../assets/images/image_cards/image1.png";
import image32 from "../../../assets/images/image_cards/image2.png";
import Footer from "../../common/Footer/Footer.jsx";

const Landing = () => {
  const images = [image1, image2, image3, image4];
  const images2=[image12,image22,image32]
  return (
    <div>
      <section>
      <div id="nav_offer">
      <p style={{color:"white"}}>Use Code: BEAUTY15 - 15% off on our Bestsellers! 😍💸</p>
    </div>
      </section>
      <header>
        <div class="containers">
          <Navbar />
        </div>
      </header>
      <section>
        <div class="containers">
        <Carousal images={images} />
          <Pink text={"CLUB VELLVETTE"} theme={"dark"}/>
          <img src={banner} alt="banner" />
        </div>
      </section>
      <main>
        <div class="containers">
          <ProductCards list={images} text={"BESTSELLERS"}/>
        </div>
      </main>
      <section>
        <div class="containers">
          <Pink text={"PRODUCT OF THE MONTH"} theme={"dark"}/>
          <img src={banner2} alt="banner" />
        </div>
      </section>
      <section>
        <div class="containers">
          <ProductCards list={images} text={"CURATED KITS FOR YOU"}/>
        </div>
      </section>
      <section>
        <div class="containers">
         <Imagecards list={images2} text={"SUGAR BEAUTY BLOG"}/>
        </div>
      </section>
      <footer>
        <div class="containers">
          <Footer/>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
