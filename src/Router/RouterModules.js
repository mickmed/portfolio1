const _modules = {
 

    Home: () => import('../js/Home.js'),
    About: () => import('../js/About.js'),
    Projects: () => import('../js/Projects.js'),
    
    Resume: () => import('../js/Resume.js'),
    SignUp:()=>import ('../js/SignUp.js')
  };
   
  export default class Router {
    
    static get modules() {
      return _modules;
    }
  }