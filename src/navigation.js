searchFormBtn.addEventListener('click', (e) => {
  e.preventDefault()
  location.hash = `#search=${searchFormInput.value}`
})

trendingBtn.addEventListener('click', (e) => {
  e.preventDefault()
  location.hash = '#menu'
})

buttonAdd.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e)
  addToCart(e)
})

arrowBtn.addEventListener('click', () => window.history.back())

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
  console.log({ location })
  if (location.hash.startsWith('#menu')) {
    menuPage()
  } else if (location.hash.startsWith('#search=')) {
    searchPage()
  } else if (location.hash.startsWith('#product=')) {
    productPage()
  } else if (location.hash.startsWith('#trends')) {
    trendsPage()
  } else {
    homePage()
  }
  // location.hash
  // window.scroll({
  //   top: 0,
  //   behavior: 'smooth',
  // })
}

//functions for each page
function homePage() {
  console.log('#Home!!!')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.add('inactive')
  searchForm.classList.remove('inactive')

  headerTitle.classList.remove('inactive')
  headerCategoryTitle.classList.add('inactive')
  trendingPreviewSection.classList.remove('inactive')
  categoriesPreviewSection.classList.remove('inactive')

  menuListSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getProducts()
}

function menuPage() {
  console.log('#Menu!!')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.remove('header-arrow--white')
  searchForm.classList.add('inactive')

  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.remove('inactive')
  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')

  menuListSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  getMenu()
  headerCategoryTitle.textContent = 'Cardápio'
}

function productPage() {
  console.log('#Product!!')

  headerSection.classList.add('header-container--long')
  headerSection.style.background = ''
  arrowBtn.classList.remove('inactive')
  arrowBtn.classList.add('header-arrow--white')
  searchForm.classList.add('inactive')

  headerTitle.classList.add('inactive')
  headerCategoryTitle.classList.add('inactive')
  trendingPreviewSection.classList.add('inactive')
  categoriesPreviewSection.classList.add('inactive')

  menuListSection.classList.add('inactive')
  movieDetailSection.classList.remove('inactive')
  const [_, productId] = location.hash.split('=') //['#product=', 'id-name']
  // console.log(productId)
  getProduct(productId)
}

function searchPage() {
  console.log('#Search!!')
}

function trendsPage() {
  console.log('#Trends!!')
}
