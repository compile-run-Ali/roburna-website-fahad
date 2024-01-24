import bannerlogo from '../../Assets/images/bannerlogo.png'
import bulb from '../../Assets/images/gr-bulb.png'
import grleaf from '../../Assets/images/gradient-leaf.png'
import leafplant from '../../Assets/images/leafplant.png'
import yellowLeaf from '../../Assets/images/yellow-leaf.png'
import treebg from '../../Assets/images/bg-tree.png'
import labs from '../../Assets/images/labs.png'
import blockchain from '../../Assets/images/blockchain.png'
import { BlogSlider } from '../../Components/BlogSlider'
import Carousel from "react-multi-carousel";
import React from 'react';
import { NavLink } from 'react-router-dom'

import "react-multi-carousel/lib/styles.css";
import './home.css'
import { useHomeBanner } from 'utils/hooks'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 300 },
    items: 1
  }
};

export function Home() {
  const { banner, features } = useHomeBanner()

  console.log('feature', features)

  return (
    <div className="home">
      {!!banner && (
        <section className='banner d-md-flex align-items-center'>
          <div className='banner-text-box text-center d-flex flex-column align-items-center justify-content-center'>
            <img className='logo' src={bannerlogo} alt={bannerlogo} />
            <h1 className='px-5'>{banner.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: banner.description }} />
          </div>
        </section>
      )}

      <section className='feature-slider-sec-wrap'>
        <div className='feature-slider-sec'>
          <div className='feature-slider-wrap'>
            <Carousel responsive={responsive}  infinite autoPlaySpeed={3000} arrows={true}>
              {!!features.length && features.map((feature: any, index: number) => {
                return (
                  <div className='feature-slider-item-wrap' key={index}>
                    <div className='feature-slider-item'>
                      <h6>FEATURES</h6>
                      <img className='feature-icon' src={grleaf} alt="" />
                      <h3 className='px-md-5'>{feature.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: feature.description }} />
                      
                      <NavLink to={`/${feature.link}`} className='--btn-1'>LEARN MORE</NavLink>
                      {index === 0 ?
                        <b className='feature-slide-btn slide-btn-left gradient-color'> {"<"} {features[features.length - 1].title} </b>
                        : <b className='feature-slide-btn slide-btn-left gradient-color'> {"<"} {features[index - 1].title} </b>
                      }
                      {features.length === index + 1 ?
                        <b className='feature-slide-btn slide-btn-right gradient-color'>  {features[0].title} {">"}</b>
                        : <b className='feature-slide-btn slide-btn-right gradient-color'> {features[index + 1].title} {">"} </b>
                      }
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>

      <section className='home-info-sec p-md-5 pb-md-0 '>
        <img src={treebg} alt={treebg} className='treebg' />
        <div className='row p-lg-5 pb-lg-0'>
          <div className='col-md-6 col-12 p-0 margin-bottom-custom mobile-border-radius'>
            <div className='info-card d-flex flex-column justify-content-center align-items-center text-center'>
              <img className='info-leaf' src={yellowLeaf} alt={yellowLeaf} width='46px' />
              <img className='info-image' src={labs} alt={labs} width={100}/>
              <p >RBA LABS is the development arm of the Roburna ecosystem, on a mission to open up
                the Web3 horizon to a wide range of corporate and industrial sectors, including energy
                management, healthcare, agriculture and natural resources, retail, e-commerce, gaming,
                industrial production, and many others.</p>
              <NavLink to='/labs' className='--btn-1'>READ MORE</NavLink>
            </div></div>
          <div className='col-md-6 col-12 p-0 margin-bottom-custom mobile-border-radius'>
            <div className='info-card card2 d-flex flex-column justify-content-center align-items-center text-center'>
              <img className='info-leaf' src={yellowLeaf} alt={yellowLeaf} width='46px' />
              <img className='info-image' src={blockchain} alt={blockchain} width={100} />
              <p >Roburna Blockchain uses frictionless earning and elastic validation to introduce the
                Proof-of-Earn (PoE) and Delegated-Proof-of-Earn (DPoE) consensus mechanisms. Everyone
                holding RBA will earn dividends on blockchain transactions and stands a fair chance of</p>
              <NavLink to='/blockchain' className='--btn-1 '>READ MORE</NavLink>
            </div>
          </div>
        </div>
      </section>
      <BlogSlider />
    </div>
  );
}

