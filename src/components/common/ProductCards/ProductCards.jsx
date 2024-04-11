import React from 'react'
import Pink from '../Pink_bar_text/Pink'
import ProductCard from './ProductCard'
import "./products.css"

const ProductCards = ({list,text}) => {
  return (
    <div class="products_section">
        <Pink text={text} theme={"light"}/>
        <div>
        {list.map(item=><ProductCard />)}
        </div>
    </div>
  )
}

export default ProductCards