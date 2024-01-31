import React from 'react'
import ArrowGreen from '../utils/assets/images/brown-arrow.svg';
import PieGraph from '../utils/assets/images/pie-graph.png';

const Widget2 = () => {
  return (
    <div className='widget-3'>
          <span className='top-2'>
            Quarter Goal
          </span>
          <div className='percentage-2'>
            <div>
              <img className="img-percentage" src={PieGraph} alt="pie-graph" />
            </div>


          </div>

          <div className='links1'>
            <div>
              <span className='link-text'>All Goals</span>
              <span><img src={ArrowGreen} alt="arrow-green" /></span>
            </div>
          </div>
        </div>
  )
}

export default Widget2
