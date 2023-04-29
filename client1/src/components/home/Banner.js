import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";
const data = [
    "https://as1.ftcdn.net/v2/jpg/01/02/67/24/1000_F_102672433_j2KbPbusajfedr8oHNmgQLb9eaFUS7T1.jpg",
    "https://i.pinimg.com/474x/7b/aa/33/7baa336aa9678133105d2fa6b43bece2.jpg",
    "https://colorlib.com/wp/wp-content/uploads/sites/2/flower-store-templates.jpg.webp",
    "https://www.farmigoagrotech.com/images/farmigo/services1.jpg"
]

const Banner = () => {
  return (
    <Carousel
      className="carasousel"
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",
        },
      }}
    >
      {data.map((imag, k) => {
        return (
          <>
            <img src={imag} alt="img" key={k} className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
}

export default Banner