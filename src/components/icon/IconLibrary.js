const IconLibrary = {
  library: {},
  removeItem (name) {
    if (typeof this.library[name] !== 'undefined') {
      delete this.library[name]
    }
  },
  add (Library) {
    // TODO: Validar objeto e lançar exceção caso não passe
    /**
     * Library Interface:
     * name: 'default' // Name of library
     * Component: 'i' || FontAwesome // Component or element of Library
     */
    if (Array.isArray(Library)) {
      Library.forEach((lib) => {
        this.assign(lib)
      })
    } else {
      this.assign(Library)
    }
  },
  set (Librarys) {
    this.library = Librarys
  },
  get (name) {
    return typeof this.library[name] !== 'undefined' ? this.library[name] : null
  },
  assign (lib) {
    this.library = Object.assign({}, this.library, {[lib.name]: lib})
  }
}

export default IconLibrary
