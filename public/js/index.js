const Translation = new Translator()
const lang = localStorage.getItem("language") || Translation._lang || undefined
const pageName = window.location.pathname.split(/[\/\.]/g)[1] || "index"
const langSwitch = document.querySelector('#langSw')

const loadCards = async () => {
    const cards = await Translation.getLanguageProperty(pageName,'cards')
    renderWebToolCards(cards)
}

const init = () => {
    langSwitch.checked = Translation._lang === 'es'
    Translation.load(pageName,lang)
    langSwitch.dataset.lang = lang
    if(pageName === 'tools') loadCards()
}

langSwitch?.addEventListener('click',(evt) => {
    const currLang = langSwitch.dataset.lang
    if(currLang === 'es'){
        langSwitch.dataset.lang = 'en'
        langSwitch.checked = false
        Translation.load(pageName,'en')
    } else {
        langSwitch.dataset.lang = 'es'
        langSwitch.checked = true
        Translation.load(pageName,'es')
    }
})

init()