export const Image = (image, className) => {
  // console.log(Image)
  const img = document.createElement("img")
  img.classList.add(className)
  img.src = image
  return img
}
