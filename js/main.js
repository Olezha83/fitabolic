// BANNER SLIDER

const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
const bannerWrapper = document.getElementById('banner-flex-container')
const slideWidth = bannerWrapper.offsetWidth
const bannerWrapperWidth = bannerWrapper.scrollWidth

let currentPosition = 0

nextButton.onclick = () => {
  if (currentPosition > -bannerWrapperWidth + slideWidth) {
    currentPosition -= slideWidth
    Object.assign(bannerWrapper.style, {
      left: `${currentPosition}px`
    })
  }
}

prevButton.onclick = () => {
  if (currentPosition !== 0) {
    currentPosition += slideWidth
    Object.assign(bannerWrapper.style, {
      left: `${currentPosition}px`
    })
  }
}
