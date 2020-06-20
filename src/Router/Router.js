// import * as Home from "../js/Home.js"
import RouterModules from "./RouterModules.js"

export const Router = (route) => {
  console.log(route)
  let Navigo = require("navigo")
  let root = null
  let useHash = false // Defaults to: false
  // var hash = '#!'; // Defaults to: '#'
  let router = new Navigo(root, useHash)
  router
  
    .on({

      
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
    .notFound(function () {
      // pageNotFoundController()
      // router.navigate(route)
    })

    .resolve()
    if(route){
      // console.log('route-->', route)
      router.navigate(route)

    }

  return router
}
