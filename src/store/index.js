import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
} // only in development mode

export default createStore({
  plugins,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
