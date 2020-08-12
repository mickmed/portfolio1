const _modules = {
     
  About: () => import('../Components/About/About.js'),
  Projects: () => import('../Components/Projects/Projects.js'),
  Resume: () => import('../Components/Resume/Resume.js'),
  SignUp:()=>import ('../Components/Login/SignUp.js')
};
 
export default class Router {
  
  static get modules() {
    return _modules;
  }
}