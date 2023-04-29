import React from 'react'
import "./newnav.css";

const Newnav = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            {/* it also has both left and right parts */}
            <div className='left_data'>
                <p>All</p>
                <p>Vegetables</p>
                <p>Fruits</p>
                <p>Graind and Cereals</p>
                <p>Dairy</p>
                <p>Herbs and Spices</p>
                <p>Nuts</p>
                <p>Organic Products</p>
                <p>Flowers</p>
            </div>
            <div className='right_data'>
{/* keep image */}
            </div>
        </div>
    </div>
  )
}

export default Newnav