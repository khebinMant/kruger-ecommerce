import React from 'react'

export const DetailsThumb = ({ images, tab, myRef } ) => {
  return (
    <div className="thumb" ref={myRef}>
    {images.map((img, index) => (
      <img src={img.url || img.uri} alt="" key={index} onClick={() => tab(index)} />
    ))}
  </div>
  )
}
