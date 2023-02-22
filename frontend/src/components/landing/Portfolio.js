import React from 'react';
import { connect } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import bg from './../../assets/img/space-koala-logo-01.png';


const Portfolio = () => {
  return (
    <section className="portfolio-block block-intro portfolio-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white" style={{"textAlign": "center"}}>
            <img data-bss-hover-animate="pulse" className='portofolio_img' src={bg} style={{"max-width": "560px", "width": "80%"}} alt="" />
            <br/>
            <h3 className='mt-3'>Are you your koala's best friend? Your koala has the chance to go into space and wants to take his best friend with him. Are you his best friend?</h3>

              
            <a href="/mint" ><button className="btn portofolio_connect_btn" type="button" style={{"border-radius": "5px", "width": "195.234px", "height": "70px", "background-color": "#0ea0ff", "border-bottom": "5px solid #0d6efd", "font-weight": "bold", "color": "white", "font-size": "23px"}}>Mint Now</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect()(Portfolio);
