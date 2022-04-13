import React from "react";
import "./TeamCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeHolder from '../../../assets/img/placeholder-img.png'

function PortfolioCard({ items }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: false,
    slidesPerRow: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          rows: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="d-none d-sm-block">
        
        <div className="portfolioCard_container">
          {items.length !== 0 &&
            items.map((item) => {
              return (
                <div className="portfolioCard_card" key={item.id}>
                  <div className="portfolioCard_box">
                    <div className="portfolioCard_content">
                    <a href={item.linkedin} target="_blank"><h3>{item.name}</h3></a> 
                      <p>
                          <img src={placeHolder} alt="team_member_profile"/>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
  
      </div>

      {/* mobile-view */}
      <div className="d-block d-sm-none">
        <div className="portfolioCard_container">
          <Slider {...settings}>
            {items.length !== 0 &&
              items.map((item) => {
                return (
                  <div className="portfolioCard_card" key={item.id}>
                    <div className="portfolioCard_box">
                      <div className="portfolioCard_content">
                        <a href={item.linkedin} target="_blank"><h3>{item.name}</h3></a>
                        <p>
                        <img src={placeHolder} alt="team_member_profile"/>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
