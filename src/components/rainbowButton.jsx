import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../styles/rainbowBtn.css'

const RainbowButton = () => {
  return ( <div className='btn'><ConnectButton idName="btn" label="Connect"/></div>);
};

export default RainbowButton;

