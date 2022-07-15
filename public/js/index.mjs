import Translator from "./translator.mjs"
import ToolsUtil from "./tools.mjs"

const Translation = new Translator()
const pageName = window.location.pathname.split(/[\/\.]/g)[1]

const loadCards = () => {
    const cards = Translation.getLanguageProperty(pageName,'cards')
    ToolsUtil(cards)
}

const init = () => {
    const lang = navigator.language
    Translation.load(pageName,'es')
    if(pageName === 'tools') loadCards()
}


init()