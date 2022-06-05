import router from './router'

function registerModule(module) {
  if (module.router) module.router(router)
}

export function registerModules(modules) {
  Object.keys(modules).forEach(key => {
    const module = modules[key]
    registerModule(module)
  })
}