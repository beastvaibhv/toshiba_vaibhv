import React from 'react';
import ArrowDown from '../utils/assets/images/arrow-down.svg'

const SidebarButton = ({btnImage, btnName, extendable}) => {
  return (
    <div className='sidebar-button'>
    <span className='sidebar-btn-inner'>
    <span><img src={btnImage} alt="btnImage" /></span>
    <span>{btnName}</span>
    

    </span>
    {extendable && <span className='arr-down'> <img src={ArrowDown} alt="arrow-down" /></span>}
    

      
    </div>
  )
}

export default SidebarButton
