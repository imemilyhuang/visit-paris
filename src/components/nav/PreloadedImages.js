import React, { useEffect } from 'react'

const PreloadedImages = ({setLoading}) => {
  const images = [
    "/assets/covers/home.png",
    "/assets/covers/attractions.png",
    "/assets/covers/activities.png",
    "/assets/covers/accomodations.png"
  ]
  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.onload = () => resolve(image)
        loadImg.src = image
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(image)))
      .then(() => setLoading(false))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return null
}

export default PreloadedImages