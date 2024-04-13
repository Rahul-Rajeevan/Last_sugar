import React from 'react'
import "./breadcrumb.css"

const BreadCrumb = ({list}) => {
    const style = {
        '--bs-breadcrumb-divider': '">',
    };
  return (
    <nav id='bcrumb' style={style} aria-label="breadcrumb">
    <ol class="breadcrumb">
      {list.map(e=><li class="breadcrumb-item"><a href="#">{e}</a></li>)}
      {/* <li class="breadcrumb-item active" aria-current="page">Library</li> */}
    </ol>
  </nav>
  )
}

export default BreadCrumb