// description: this file contains all the DOM elements that are used in the app

// DOM Elements --- id and class selectors
const $ = (selector) => document.querySelector(selector)

// header-Section---------
const headerSection = $('#header')
const searchForm = $('#searchForm') //Lists & Containers

//trending-section---------
const trendingPreviewSection = $('#trendingPreview')
const trendingPreviewProductList = $('.trendingPreview-productList') //Lists & Containers

//category-section
const categoriesPreviewSection = $('#categoriesPreview')
const categoriesPreviewList = $('.categoriesPreview-list') //Lists & Containers

//generic-section
//menu section
const menuListSection = $('#menuList')
// const genericListSection = $('#genericList');
// const movieDetailCategoriesList = $('#movieDetail .categories-list');//Lists & Containers

//details-section
const movieDetailSection = $('#movieDetail')
const relatedMoviesContainer = $('.relatedMovies-scrollContainer') //Lists & Containers

// Elements---
const arrowBtn = $('.header-arrow')
const headerTitle = $('.header-title')
const headerCategoryTitle = $('.header-title--categoryView')

//elements-buttons and links
const searchFormInput = $('#searchForm input')
const searchFormBtn = $('#searchBtn')
const trendingBtn = $('.trendingPreview-btn')

// Add for shop section
const quantityBtnDec = $('#quantityBtnDec')
const quantityBtnInc = $('#quantityBtnInc')
const quantityData = $('#qty')
const totalPrice = $('#totalPrice')
const cartItems = $('#cartItems')
const buttonAdd = $('#addBtn')
// const buttonRemove = $('#removeBtn')

//elements-titles
const productDetailTitle = $('.movieDetail-title')
const productDetailDescription = $('.movieDetail-description')
const productDetailScore = $('.movieDetail-score')
