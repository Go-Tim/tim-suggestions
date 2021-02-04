import React, { useState, useEffect } from 'react';

const ProgressiveImage = src => {
  const [sourceLoaded, setSourceLoaded] = useState('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded
}

export default ProgressiveImage;
