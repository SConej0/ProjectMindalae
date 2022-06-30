import Translator from "./translator.mjs"

const init = () => {
    const lang = navigator.language
    const pageName = window.location.pathname.split(/[\/\.]/g)[1]
    const Translation = new Translator()
    Translation.load(pageName,'es')
}


init()