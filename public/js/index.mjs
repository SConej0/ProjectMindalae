import Translator from "./translator.mjs"
import ToolsUtil from "./tools.mjs"

const Translation = new Translator()
const pageName = window.location.pathname.split(/[\/\.]/g)[1] || "index"
const langSwitch = document.querySelector('#langSw')

const loadCards = async () => {
    const cards = await Translation.getLanguageProperty(pageName,'cards')
    ToolsUtil(cards)
}

const init = () => {
    Translation.load(pageName,'es')
    if(pageName === 'tools') loadCards()
    langSwitch.dataset.lang = Translation._lang
    langSwitch.checked = Translation._lang === 'en'
}

langSwitch?.addEventListener('click',(evt) => {
    const currLang = langSwitch.dataset.lang
    if(currLang === 'es'){
        langSwitch.dataset.lang = 'en'
        langSwitch.checked = true
        Translation.load(pageName,'en')
    } else {
        langSwitch.dataset.lang = 'es'
        langSwitch.checked = false
        Translation.load(pageName,'es')
    }
})

init()