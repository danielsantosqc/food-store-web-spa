const lanches = [
  {
    id: 1,
    name: 'x-burger',
    price: 9,
    description: 'Hambúrguer sabor picanha 90g, queijo e molho especial',
    image: 'https://loremflickr.com/320/240',
    category: 'lanches',
  },
  {
    id: 2,
    name: 'x-salada',
    price: 10,
    description:
      'Hambúrguer sabor picanha 90g, queijo, tomate, alface e molho especial',
    image: 'https://loremflickr.com/320/240',
    category: 'lanches',
  },
  {
    id: 3,
    name: 'x-bacon',
    price: 10,
    description:
      'Pao australiano, hambúrguer sabor picanha 90g, bacon, queijo, tomate, alface e molho especial',
    image: 'https://loremflickr.com/320/240',
    category: 'lanches',
  },
  {
    id: 4,
    name: 'x-lombo',
    price: 10,
    description:
      'Hambúrguer sabor picanha 90g, lombo, queijo, tomate, alface e molho especial',
    image: 'https://loremflickr.com/320/240',
    category: 'lanches',
  },
  {
    id: 5,
    name: 'x-tudo',
    price: 10,
    description:
      'Hambúrguer sabor picanha 90g, lombo, queijo, tomate, alface, bacon, calabresa e molho especial',
    image: 'https://loremflickr.com/320/240',
    category: 'lanches',
  },
]
let cartBtn = document.querySelector('#cartBtn')

async function fetchData() {
  const response = await fetch('http://localhost:3000/api/v1/products')
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    // console.log(response)
    const data = await response.json()
    // data.products.forEach((element) => {
    //   console.log(element.name)
    // })
    productos = data.products
    // console.log('data')
    // console.log(productos)
    // createProducts(data.products, trendingMoviesPreviewList)
    // createMenu(data.products, menuListSection)
    return productos
  } catch (error) {}
}
async function fetchDataOneProduct(id) {
  const response = await fetch(`http://localhost:3000/api/v1/products/${id}`)
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    // console.log(response)
    const data = await response.json()
    producto = data.products
    // console.log('data')
    // console.log(producto)
    return producto
  } catch (error) {}
}

function createProducts(products, container) {
  container.innerHTML = ''
  console.log('productssss')
  console.log(products)
  products.forEach((product) => {
    console.log(product.image)
    if (product.image) {
      const movieContainer = document.createElement('div')
      movieContainer.classList.add('product-container')

      const movieImg = document.createElement('img')
      movieImg.classList.add('product-img')
      movieImg.setAttribute('alt', product.name)
      movieImg.setAttribute('src', `${product.image}/${product.name}`)
      movieImg.addEventListener('click', () => {
        location.hash = `#product=${product._id}`
      })
      movieContainer.appendChild(movieImg)
      container.appendChild(movieContainer)
    }
  })
}

function createProduct(product) {
  // container.innerHTML = ''
  console.log('paso por createProduct')
  console.log(product)
  console.log(product.image)
  headerSection.style.background = `
    linear-gradient(
      180deg, 
      rgba(0, 0, 0, 0.35) 19.27%, 
      rgba(0, 0, 0, 0) 29.17%
      ),
    url(${product.image}/${product.name})
  `

  productDetailTitle.textContent = product.name
  productDetailDescription.textContent = product.description
  productDetailScore.textContent = product.price.toFixed(2)
  productDetailScore.dataset.price = product.price.toFixed(2)
  quantityData.dataset.number = 1
  quantityData.textContent = quantityData.dataset.number
  totalPrice.textContent = product.price.toFixed(2)
  quantityBtnDec.addEventListener('click', () => {
    productQuantity()
  })
  quantityBtnInc.addEventListener('click', () => {
    productQuantity()
  })
  // buttonAdd.addEventListener('click', () => {
  //   addToCart()
  // })
}

function productQuantity() {
  // escucha eventos del dom y modifica el dom
  const value = parseInt(quantityData.dataset.number)
  // console.log('value')
  // console.log(value)

  document.addEventListener('click', (e) => {
    // e.preventDefault()
    const incOrDec = parseInt(e.target.dataset.qty)
    // console.log('dec/inc')
    // console.log(incOrDec)
    if (value == 1 && incOrDec < 0) {
      console.log('value > 1')
      return
    }
    quantityData.dataset.number = value + incOrDec
    quantityData.textContent = quantityData.dataset.number
    totalPrice.textContent = (
      productDetailScore.dataset.price * quantityData.dataset.number
    ).toFixed(2)
  })
}

function addToCart(e) {
  e.preventDefault()
  const data = parseInt(quantityData.dataset.number)
  cartItems.textContent = data
}
//***** menu list section***********
function createMenu(products, container) {
  container.innerHTML = ''
  products.forEach((product) => {
    // console.log(product.name)
    //***main container product and image***
    const productContainer = document.createElement('div')
    productContainer.classList.add('product-container')
    productContainer.addEventListener('click', () => {
      location.hash = `#product=${product._id}`
    })

    //---container   product description---
    const productDescriptionContainer = document.createElement('div')
    productDescriptionContainer.classList.add('description-container')

    //product name
    const productName = document.createElement('p')
    productName.classList.add('product-description')
    const productNameText = document.createElement('h2')
    productNameText.textContent = product.name
    productName.appendChild(productNameText)

    //product description
    const productDescription = document.createElement('p')
    productDescription.classList.add('product-description')
    productDescription.textContent = product.description

    // //product price
    const productPrice = document.createElement('p')
    productPrice.classList.add('product-description')
    const productPriceText = document.createElement('strong')
    productPriceText.textContent = `R$ ${product.price}`
    productPrice.appendChild(productPriceText)

    // //---container product image---
    const productImageContainer = document.createElement('div')
    productImageContainer.classList.add('img-container')
    const productImage = document.createElement('img')
    productImage.classList.add('product-img')
    productImage.setAttribute('alt', product.name)
    productImage.setAttribute('src', `${product.image}/${product.name}`)
    // productImage.setAttribute('src', product.image)

    //append elements
    productDescriptionContainer.appendChild(productName)
    productDescriptionContainer.appendChild(productDescription)
    productDescriptionContainer.appendChild(productPrice)

    productImageContainer.appendChild(productImage)

    productContainer.appendChild(productDescriptionContainer)
    productContainer.appendChild(productImageContainer)
    container.appendChild(productContainer)
  })
}

function createCategories(categories, container) {
  container.innerHTML = ''

  categories.forEach((category) => {
    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container')

    const categoryTitle = document.createElement('h3')
    categoryTitle.classList.add('category-title')
    categoryTitle.setAttribute('id', 'id' + category.id)
    categoryTitle.addEventListener('click', () => {
      location.hash = `#category=${category.id}-${category.name}`
    })
    const categoryTitleText = document.createTextNode(category.name)

    categoryTitle.appendChild(categoryTitleText)
    categoryContainer.appendChild(categoryTitle)
    container.appendChild(categoryContainer)
  })
}

async function getMenu() {
  const products = await fetchData()
  createMenu(products, menuListSection)
}

async function getProducts() {
  const products = await fetchData()
  createProducts(products, trendingPreviewProductList)
}

async function getProduct(id) {
  const product = await fetchDataOneProduct(id)
  console.log(' paso por getProduct')
  console.log(product)
  createProduct(product)
}
// getProduct('6416871da71639799f209dcf')

// getMenu()
// getProducts()
// lanches.forEach((product) => {
//   console.log(product.name, product.description)
// })

// createCategories(
//   [
//     { id: 12, name: 'lanches' },
//     { id: 16, name: 'pasteis' },
//     { id: 28, name: 'porcões batata frita' },
//     { id: 37, name: 'combos' },
//     { id: 37, name: 'hot dog' },
//     { id: 28, name: 'porcões calabresa' },
//   ],
//   categoriesPreviewList
// )
