const menuItems = document.querySelectorAll('.menuItems')
const wrapper = document.querySelector('.silderWrapper')

const products = [
  {
    id: 1,
    title: 'JORDAN',
    price: 119,
    description:
      'Jordan, an Arab nation on the east bank of the Jordan River, is defined by ancient monuments, nature reserves and seaside resorts.',
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'CAT',
    price: 149,
    description:
      'We come from a world of possibility, where industriousness and curiosity fuel the opportunity we see around us.',
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'POWER',
    price: 109,
    description: `PAKISTAN'S FAVORITE FOOTWEAR BRAND. Since 1942 Bata Pakistan has been rendering its services to its valued customers by offering quality products.`,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'HIPPIE',
    price: 129,
    description:
      'Space Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission.',
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'ADDIDAS',
    price: 99,
    description:
      'Shop adidas shoes for training, sport, and casual lifestyle at the official adidas online store. Browse all the hottest styles like UltraBoost',
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
]
let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')
const currentProductDesc = document.querySelector('.productDesc')

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    //change the choosen product
    choosenProduct = products[index]

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = '$' + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img
    currentProductDesc.textContent = choosenProduct.description

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code
    })
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white'
      size.style.color = 'black'
    })
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})
