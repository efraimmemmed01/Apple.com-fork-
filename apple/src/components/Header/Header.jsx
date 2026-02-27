import React from 'react'
import './Header.css'
import iphone from "../../assets/iphone17 .png";


const Header = () => {
  return (
    < >
    
        <div className='hdr'>Products, services and OS functions may not be available in this country. </div>
<div>
  <nav className='navcon1'>
    <ul>
      <li><i class="fa-brands fa-apple"></i></li>
            <li className='menu-item'>Mac</li>
      <li className='menu-item'>Ipad</li>
      <li className='menu-item'>Iphone</li>
      <li className='menu-item'>Watch</li>
      <li className='menu-item'>AirPods</li>
      <li className='menu-item'>Tv & Home</li>
      <li className='menu-item'>Entertainment</li>
      <li className='menu-item'>Support</li>
      <li className='menu-item'>Where to Buy</li>

    </ul>
  </nav>
</div>

<div className='ipcon'>
<h1>IPhone</h1>
<h3>Say hello to the latest geneeration pf iphone</h3>
<h4>Learn more</h4>
</div>

<div className='iphoneImg'>

<img className='iphone' src={iphone} alt="" />

</div>


    
    </>
  )
}

export default Header