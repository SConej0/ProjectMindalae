const cardTemplate = ({type, desc, url, imgSrc}) => `
<div class="m-3 card color-secondary" style="width: 18rem;">
<img src="./public/img/${imgSrc}" class="card-img-top" alt="${type} Logo"/>
<div class="card-body">
  <h5 class="card-title text-quaternary">${type}</h5>
  <p class="text-tertiary">${desc}</p>
  <a href="${url}" class="btn color-primary text-quaternary">Build with ${type}</a>
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

const webToolsNode = document.querySelector('#WebsiteTools')

const renderWebToolCards = () => {
  webToolsNode.innerHTML = websiteTools.reduce((curr,acc) => {
    curr += cardTemplate(acc)
    return curr;
  },'')
}

renderWebToolCards()