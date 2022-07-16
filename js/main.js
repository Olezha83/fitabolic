// CAROUSEL

const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')
const bannerWrapper = document.getElementById('banner-flex-container')
const slideWidth = bannerWrapper.offsetWidth
const bannerWrapperWidth = bannerWrapper.scrollWidth
const slideCount = bannerWrapper.childElementCount

const lastPosition = -bannerWrapperWidth + slideWidth

let currentPosition = 0

let intervalID

function buttonStatesToggle () {
  if (currentPosition < 0 && prevButton.classList.contains('button-muted')) {
    prevButton.classList.replace('button-muted', 'button-active')
  }

  if (currentPosition === 0 && prevButton.classList.contains('button-active')) {
    prevButton.classList.replace('button-active', 'button-muted')
  }
  
  if (currentPosition !== lastPosition && nextButton.classList.contains('button-muted')) {
    nextButton.classList.replace('button-muted', 'button-active')
  }
      
  if (currentPosition === lastPosition) {
    nextButton.classList.replace('button-active', 'button-muted')
    currentPosition = slideWidth
  }
}

function changeImg () {
  intervalID = setInterval(() => {
    currentPosition -= slideWidth

    Object.assign(bannerWrapper.style, {
      left: `${currentPosition}px`
    })

    buttonStatesToggle()
  }, 7000);
}

nextButton.onclick = function () {
  if (this.classList.contains('button-active')) {
    clearInterval(intervalID)

    currentPosition -= slideWidth
    
    Object.assign(bannerWrapper.style, {
      left: `${currentPosition}px`
    })
    
    buttonStatesToggle()
    
    changeImg()
  }
}

prevButton.onclick = function () {
  if (this.classList.contains('button-active')) {
    clearInterval(intervalID)

    if (currentPosition === slideWidth) {
      currentPosition -= slideWidth * (slideCount - 1) 
    } else {
      currentPosition += slideWidth
    }

    Object.assign(bannerWrapper.style, {
      left: `${currentPosition}px`
    })

    buttonStatesToggle()
    
    changeImg()
  }
}

window.onload = changeImg
