// import * as Home from "../js/Home.js"
import RouterModules from "./RouterModules.js"

export const Router = (route) => {
  // console.log('router', route)
  let Navigo = require("navigo")

  let root = null
  let useHash = false // Defaults to: false
  // var hash = '#!'; // Defaults to: '#''

  /**
   * Reload the current route.
   */

  // while (mainContent.childNodes.length > 1) {
  //   mainContent.removeChild(mainContent.lastChild)
  // }

  let router = new Navigo(root)
  router

    .on({

      "/signup": function(params){
        RouterModules.modules.SignUp().then((module) => module.SignUp())

      },
      "/projects": function (params) {
        // console.log("project route")
        RouterModules.modules.Projects().then((module) => module.Projects())
      },
      "/about": function (params) {
        // console.log("about route")
        RouterModules.modules.About().then((module) => module.About())
      },
      "/resume": function (params) {
        // console.log("about route")
        RouterModules.modules.Resume().then((module) => module.Resume())
      },

      "/": function () {
        // console.log("root route")
        RouterModules.modules.About().then((module) => module.About())

        //   router.navigate('/product');
      },
    })
    .resolve()
  router
    .notFound(function () {
      // pageNotFoundController()
      router.navigate(route)
      console.log("here not found")
    })

    .resolve()
  if (route) {
    // console.log("route-->", route)
    router.navigate(route)
  }

  return router
}
