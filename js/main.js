
function activateAllEffect() {
  let card = document.getElementById('card')
  let displayActiveImage = document.getElementById('activeImage')
  let title = document.getElementById('title')
  let skew = document.getElementById('skew')
  let nonSkew = document.getElementById('non-skew')
  let info = document.getElementById('information')
  let stats = document.getElementById('stats')
  let power = document.getElementById('power-lenght')
  let health = document.getElementById('health-lenght')
  let mobility = document.getElementById('mobility-lenght')
  let technique = document.getElementById('technique-lenght')
  let range = document.getElementById('range-lenght')

  title.classList = 'active'
  skew.classList = 'skew active'
  nonSkew.classList = 'non-skew active'
  card.classList = 'card card-active'
  displayActiveImage.classList = 'image-overlay active'
  info.classList = 'information active'
  stats.classList = 'stats rows active'
  power.classList = 'power-lenght active'
  health.classList = 'health-lenght active'
  mobility.classList = 'mobility-lenght active'
  technique.classList = 'technique-lenght active'
  range.classList = 'range-lenght active'
}

function returnToNormal() {
  let card = document.getElementById('card')
  let displayActiveImage = document.getElementById('activeImage')
  let title = document.getElementById('title')
  let skew = document.getElementById('skew')
  let nonSkew = document.getElementById('non-skew')
  let info = document.getElementById('information')
  let power = document.getElementById('power-lenght')
  let health = document.getElementById('health-lenght')
  let mobility = document.getElementById('mobility-lenght')
  let technique = document.getElementById('technique-lenght')
  let range = document.getElementById('range-lenght')


  title.classList.remove('active')
  skew.classList.remove('active')
  nonSkew.classList.remove('active')
  displayActiveImage.classList.remove('active')
  card.classList.remove('card-active')
  info.classList.remove('active')
  stats.classList.remove('active')
  power.classList.remove('active')
  health.classList.remove('active')
  mobility.classList.remove('active')
  technique.classList.remove('active')
  range.classList.remove('active')
}