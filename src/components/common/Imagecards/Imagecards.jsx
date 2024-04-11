import React from 'react'
import Pink from '../Pink_bar_text/Pink'
import "./imagecards.css"

const Imagecards = ({list,text}) => {
  return (
    <div class="images_section">
        <Pink text={text} theme={"dark"}/>
        <div>
        {list.map(item=><img src={item} alt="image"/>)}
        </div>
    </div>
  )
}

export default Imagecards