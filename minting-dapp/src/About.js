import React from 'react';
import image1 from './webBanner1.jpg'
import Center from './Center.css';

const About = () => {

  const styleObj = {color: "#dd3db5"}
  const titleSize = {fontSize: 80,
    color: "#dd3db5",
    textAlign: "center",
    paddingTop: "100px",
    paddingRight: "100px",
    paddingLeft: "100px",
    paddingBottom: "100px"}
  const bodySize = {fontSize: 25,
    color: "#dd3db5",
    textAlign: "center",
    paddingTop: "100px",
    paddingRight: "100px",
    paddingLeft: "100px",
    paddingBottom: "100px"}
  const bannerSize = {
    textAlign: "center",        
    paddingLeft: "10px",
    }

  return (
    <div >

        <hr style={styleObj}/>
        <h1 style={titleSize} >About </h1>
        <h6 style={bodySize}>The Peaky Panthers are a collection of 8,888 unique and hand crafted NFT's living on the Avalanche C-Chain. The Panthers team and community strives to be leaders and set the standard for NFT projects built on Avalanche. Peaky Panther's hodlers will have access to an insane amount of community driven value including things such as cash giveaways, games, competitions, and events. Check out our Road Map to see some of the thing we have in store! Get involved today and cement yourself as an OG in the Peaky Panthers community! Mint Date to be announced soon! </h6>
        <img class="center-image" src={image1} alt="pp-banner"/>
    </div>
  );
};

export default About;
