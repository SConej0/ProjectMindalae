"use strict";
import en from '../lang/en.json' assert {type: 'json'};
import es from '../lang/es.json' assert {type: 'json'};

class Translator {
  constructor(options = {}) {
    this._options = Object.assign({}, this.defaultConfig, options);
    this._lang = this.getLanguage();
    this._elements = document.querySelectorAll("[data-i18n]");
  }

  getLanguage() {
    if (!this._options.detectLanguage) {
      return this._options.defaultLanguage;
    }
    
    var stored = localStorage.getItem("language");

    if (this._options.persist && stored) {
      return stored;
    }
    
    var lang = navigator.languages ? navigator.languages[0] : navigator.language;

    return lang.substr(0, 2);
  }

  load(pageName,lang = null) {
    if (lang) {
      if (!this._options.languages.includes(lang)) {
        return;
      }

      this._lang = lang;
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
    function replace(element) {
      var text = element.dataset.i18n
      if(text.includes('com')){
        element.innerHTML = es.com[text.substr(3)]
      } else if (text.includes('nav')){
        element.innerHTML = es.nav[text.substr(3)]
      } else {
        element.innerHTML = es.index[text]
      }
    }
    this._elements.forEach(replace);
  }

  get defaultConfig() {
    return {
      persist: false,
      languages: ["en","es"],
      defaultLanguage: "en",
      detectLanguage: true,
      filesLocation: "/i18n"
    };
  }
}

export default Translator;