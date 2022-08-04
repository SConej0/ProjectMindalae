// import en from '../lang/en.json' assert {type: 'json'};
// import es from '../lang/es.json' assert {type: 'json'};

class Translator {
  constructor(options = {}) {
    this._options = Object.assign({}, this.defaultConfig, options);
    this._lang = this.getLanguage();
    this._elements = document.querySelectorAll("[data-i18n]");
    this._translations = JSON.parse(localStorage.getItem('translations')) || {}
  }

  async #getTranslationFromFile(){
    const res = await fetch(`./public/lang/${this._lang}.json`)
    const translation = await res.json()
    localStorage.setItem('translations',JSON.stringify(translation))
    this._translations[this._lang] = translation
  }

  getLanguage() {
    const stored = localStorage.getItem("language");

    if (this._options.persist && stored) {
      return stored;
    }
    
    if (!this._options.detectLanguage) {
      return this._options.defaultLanguage;
    }


    var lang = navigator.languages ? navigator.languages[0] : navigator.language;

    return lang.substring(0,2);
  }

  async load(pageName,lang = null) {
    if (lang) {
      if (!this._options.languages.includes(lang)) {
        return;
      }
      this._lang = lang;
    }

    if(!this._translations[this._lang]){
      await this.#getTranslationFromFile()
    }

    this.translate(pageName);
    this.toggleLangTag();

    if (this._options.persist) {
      localStorage.setItem("language", this._lang);
    }
  }

  toggleLangTag() {
    if (document.documentElement.lang !== this._lang) {
      document.documentElement.lang = this._lang;
    }
  }

  translate(pageName) {
    const {_translations,_lang} = this
    function replace(element) {
      var text = element.dataset.i18n
      if(text.includes('com')){
        element.innerHTML = _translations[_lang].com[text.substr(3)]
      } else if (text.includes('nav')){
        element.innerHTML = _translations[_lang].nav[text.substr(3)]
      } else {
        element.innerHTML = _translations[_lang][pageName][text]
      }
    }
    this._elements.forEach(replace);
  }

  async getLanguageProperty(pageName,propertyName){
    const {_lang,_translations} = this
    if(!_translations[_lang]) await this.#getTranslationFromFile()

    return _translations[_lang][pageName][propertyName]
  }

  get defaultConfig() {
    return {
      persist: true,
      languages: ["en","es"],
      defaultLanguage: "es",
      detectLanguage: true,
    };
  }
}

export default Translator;