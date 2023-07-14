import React from 'react'
import Upcoming from '../upcoming/Upcoming'
import PreviousEvent from '../upcoming/Previous'
import "./rightside.css";

const RightSide = () => {
  return (
    <div>
        <Upcoming/>
        <PreviousEvent className="prev"/>
    </div>
  )
}

export default RightSide