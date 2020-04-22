const _modules = {
    Home: () => import('../js/Home.js'),
    About: () => import('../js/About.js'),
    Projects: () => import('../js/Projects.js'),
    
    Resume: () => import('../js/Resume.js')
  };
   
  export default class Router {
    static get modules() {
      return _modules;
    }
  }