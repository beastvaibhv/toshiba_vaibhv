import React from 'react'
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Customer from './Customer';
const Body = () => {
  return (
    <div className='main-body'>
      <div className='body-top'>
        <Widget1 heading={"Revenues"} percentage={"15%"} speculation={"Increase compared to last week"} links={"Revenues report"} greenTick={true} />
        <Widget1 heading={"Lost Deals"} percentage={"4%"} speculation={"You closed 96 out of 100 deals"} links={"All deals"} greenTick={false} />
        <Widget2/>
      </div>
      <div className='body-center'>

      </div>
    </div>
  )
}

export default Body
