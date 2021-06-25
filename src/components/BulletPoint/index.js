import React from "react"

const BulletPoint = ({ description }) => {
  return (
    <li className='bulletPoint'>
      <div className='icon'>
        <i class="fa fa-angle-right mr10"></i>{" "}
      </div>
      <div className='description'>{description}</div>
    </li>
  )
}

export default BulletPoint
