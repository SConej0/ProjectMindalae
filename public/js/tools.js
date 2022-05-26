const toolSections = {
  webToolsNode: {
    node: document.querySelector("#WebsiteCards"),
    template: websiteTools,
  },
  designToolsNode: {
    node: document.querySelector("#DesignCards"),
    template: designTools,
  },
  marketToolsNode: {
    node: document.querySelector("#MarketingCards"),
    template: marketingTools,
  },
};

const reduceToCards = (toolObj) => {
  if (!toolObj) return "";
  return toolObj.reduce((curr, acc) => {
    curr += cardTemplate(acc);
    return curr;
  }, "");
};

const renderWebToolCards = () => {
  Object.keys(toolSections).forEach(
    (key) => (toolSections[key].node.innerHTML = reduceToCards(toolSections[key].template))
  );
};

renderWebToolCards();
