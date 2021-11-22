import React from 'react';
import image1 from './banner1.jpg'

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
  return (
    <div >

        <hr style={styleObj}/>
        <h1 style={titleSize} >About </h1>
        <h6 style={bodySize}>The Peaky Panthers are a collection of 8,888 unique and hand crafted NFT's living on the Avalanche C-Chain. The Panthers team and community strives to be leaders and set the standard for NFT projects built on Avalanche. Peaky Panther's hodlers will have access to an insane amount of community driven value including things such as cash giveaways, games, competitions, and events. Get involved today and cement yourself as an OG in the Peaky Panthers community! </h6>
        <img style={titleSize} src={image1} alt=""/>
    </div>
  );
};

export default About;
