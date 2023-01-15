import { useState } from "react";
import Footer from "./pages/Footer/footer";
import Header from "./pages/Header/header";
import shoeOne from "./pages/images/image-product-1.jpg";
import sub_1 from "./pages/images/image-product-1-thumbnail.jpg";
import sub_2 from "./pages/images/image-product-4-thumbnail.jpg";
import sub_3 from "./pages/images/image-product-3-thumbnail.jpg";
import sub_4 from "./pages/images/image-product-4-thumbnail.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />

      <section>
        {/* display image */}
        <div className="display-image">
          <img src={shoeOne} alt="" />

          {/* <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade"> */}
          <div className="sub-images">
            <a href={sub_1} className="bordered-img box">
              <div>
                <img src={sub_1} alt="" />
              </div>
            </a>

            <a href={sub_2} className="img-other box">
              <div>
                <img src={sub_2} alt="" />
              </div>
            </a>

            <a href={sub_3} className="img-other box">
              <div>
                <img src={sub_3} alt="" />
              </div>
            </a>

            <a href={sub_4} className="img-other box">
              <div>
                <img src={sub_4} alt="" />
              </div>
            </a>
          </div>
          {/* </LightGallery> */}
        </div>

        {/* describtion section */}
        <div className="description">
          <h4>sneaker company</h4>
          <h1>fall limited edition sneakers</h1>
          <p className="about">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand
            everything the weather can offer.
          </p>

          {/* price */}
          <div className="price">
            <div className="flex-price">
              <p className="dollar">$125.00</p>
              <p className="percentage-off">50%</p>
            </div>

            <p className="old-price">$250.00</p>
          </div>

          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
