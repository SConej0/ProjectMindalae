import resources from './resources.json' assert {type: 'json'};

const cardTemplate = ({type, desc, url, imgSrc}) => `
<div class="m-3 card color-secondary text-center align-items-center" style="width: 18rem;">
  <img src="./public/img/${imgSrc}" loading="lazy" class="mt-4 card-img-top w-75" alt="${type} Logo"/>
  <div class="d-flex card-body flex-column align-items-start">
    <h5 class="card-title text-quaternary">${type}</h5>
    <p class="text-tertiary flex-grow-1 text-medium text-start">${desc}</p>
    <a href="${url}" class="btn color-primary text-quaternary" target="_blank">Build with ${type}</a>
  </div>
</div>
`

const reduceToCards = (toolObj) => {
  if (!toolObj) return "";
  return toolObj.reduce((curr, acc) => {
    curr += cardTemplate(acc);
    return curr;
  }, "");
};

const renderWebToolCards = ({websiteTools,designTools,marketingTools}) => {
  const toolSections = {
    webToolsNode: {
      node: document.querySelector("#WebsiteCards"),
      template: {...websiteTools, ...resources.websiteTools},
    },
    designToolsNode: {
      node: document.querySelector("#DesignCards"),
      template: {...designTools, ...resources.designTools},
    },
    marketToolsNode: {
      node: document.querySelector("#MarketingCards"),
      template: {...designTools, ...resources.designTools},
    },
  };

  Object.keys(toolSections).forEach(
    (key) => (toolSections[key].node.innerHTML = reduceToCards(toolSections[key].template))
  );
};

export default renderWebToolCards;
