import React from 'react';
import Green from '../utils/assets/images/green-arrow.svg';
import ArrowGreen from '../utils/assets/images/brown-arrow.svg';

const Widget1 = ({heading, percentage,speculation,links,greenTick}) => {
  return (
    <div className='widget'>
    <div className='top-1'>
    {heading}

    </div>
    <div className='percenatge'>
     <span className='percentage-text'>{percentage}</span>
     {greenTick && <span><img src={Green} alt="green-arrow" /></span>}
    </div>
    <div className='speculation'>
     {speculation}
    </div>
    <div className='links'>
    <div>
     <span className='link-text'>{links}</span>
     <span><img src={ArrowGreen} alt="arrow-green" /></span>
     </div>
    </div>

      
    </div>
  )
}

export default Widget1;
