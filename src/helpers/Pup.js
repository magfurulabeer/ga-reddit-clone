class Pup {
  constructor (baseURL, alreadyBuilt) {
    this.baseURL = baseURL

    // Set default headers
    this.headers = new Headers()
    this.headers.append('Content-Type', 'application/json')

    // Prevent creating second set of verb methods
    if (!alreadyBuilt) {
      // Create a new pup (so original with baseURL can be reused)
      const createMethod = (verb) => (path) => {
        const pupper = new Pup(baseURL, true)
        pupper.method = verb
        pupper.path = path
        return pupper
      }

      // Create get, post, delete methods
      for (let verb of ['get', 'post', 'delete']) {
        this[verb] = createMethod(verb)
      }
    }
  }

  withBody (config) {
    this.body = config
    return this
  }

  withHeaders (config) {
    for (key in Object.keys(config)) {
      this.headers.set(key, config[key])
    }
    return this
  }

  fetch () {
    if (!this.method || !this.baseURL) {
      throw Error('Pup::fetch() - Missing HTTP verb and/or Base URL')
    }

    const url = this.baseURL + this.path
    let promise = fetch(url, {
      method: this.method,
      headers: this.headers, 
      body: JSON.stringify(this.body)
    })

    // If retrieving JSON, automatically parse it
    if (this.headers.get('Content-Type') === 'application/json') {
      return promise.then(response => response.json())
    }

    return promise
  }

  authenticated() {
    if (!this.getJWT) {
      throw Error('Pup::authenticated() - No way to get JWT')
    }

    let token = this.getToken()
    if (!token) {
      throw Error('Pup::authenticated() - No JWT token set')
    }

    return this.withHeaders({ Authorization: `Bearer ${token}` })
  }
}


export default Pup