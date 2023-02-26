import React from "react";

const About = () => {
  return (
    <div className="about_section layout_padding margin_90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="about_main">
              <div className="about_taital">About company</div>
              <p className="about_text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
              <div className="about_bt">
                <a href="#">About More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_img">
              <img src="images/about-img.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
