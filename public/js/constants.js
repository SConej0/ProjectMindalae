const cardTemplate = ({type, desc, url, imgSrc}) => `
<div class="m-3 card color-secondary text-center align-items-center" style="width: 18rem;">
  <img src="./public/img/${imgSrc}" class="mt-4 card-img-top w-75" alt="${type} Logo"/>
  <div class="d-flex card-body flex-column align-items-start">
    <h5 class="card-title text-quaternary">${type}</h5>
    <p class="text-tertiary flex-grow-1 text-medium">${desc}</p>
    <a href="${url}" class="btn color-primary text-quaternary" target="_blank">Build with ${type}</a>
  </div>
</div>
`

const websiteTools = [
  {type: 'Wix', url: 'https://www.wix.com/ecommerce/website', imgSrc : 'Wix.png', desc: 'Create an online store with the leading eCommerce platform'},
  {type: 'Square Space', url: 'https://www.squarespace.com/ecommerce-website', imgSrc : 'Squarespace.png', desc: 'Create a website that helps your business attract.'},
  {type: 'Weebly', url: 'https://www.weebly.com/features/ecommerce-website', imgSrc : 'Weebly.png', desc: 'A surprisingly easy way to sell your products online.'},
  {type: 'Shopify', url: 'https://www.shopify.com/tour/ecommerce-website', imgSrc : 'Shopify.png', desc: 'Easily build and run your ecommerce website.'},
  {type: 'Wordpress', url: 'https://wordpress.com/ecommerce/', imgSrc : 'Wordpress.png', desc: 'Everything you need for a powerful, profitable site.'},
]

const designTools = [
  {type: 'Excalidraw', url: 'https://excalidraw.com/', imgSrc : 'excalidraw.png', desc: 'A free app where you can draw your website ideas and more. Make sure to download and to save!'},
  {type: 'GoogleFonts', url: 'https://fonts.google.com/', imgSrc : 'googleFonts.jpg', desc: 'Where you can find free fonts to plug into your site.'},
  {type: 'Unsplash', url: 'https://unsplash.com/', imgSrc : 'Unsplash.png', desc: 'Where you can find free photos that you can download and use.'},
]

const marketingTools = [
  {type: 'Trello', url: 'https://trello.com/en-US', imgSrc : 'Trello.jpg', desc: 'A free organization board that resembles sticky notes to make sure your tasks are on track.'},
  {type: 'Later', url: 'https://later.com/', imgSrc : 'Later.png', desc: 'Allows you to schedule your instagram posts so you can save time and not have to do it every time you want to post.'},
]