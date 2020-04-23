import "./Helpers/Image"
import { qs, cecl } from "./Helpers/domHelper"
import { getResults } from "./Helpers/apiHelper"

// import { showSingleItemm } from "./api_helper";
// import { technologies } from "./technologies";
// import { navbar } from "./nav";

export async function Projects() {
  console.log("PROJECTS")
  let mainContent = qs(".main-content")
  mainContent.innerHTML = ""
  mainContent.innerHTML = ""
  // let paraWrap = cecl("div", "para-wrap")

  let projects = cecl("div", "projects")
  mainContent.appendChild(projects)

  // let res =
  // data.length === 0 || data.length === "undefined"
  //   ? await getResults(type)
  //   : data;
  let res = await getResults()
  console.log(res, mainContent)

  // console.log("datalenght", data.length);
  // matchMedia("(min-width: 600px)").matches &&
  // document.querySelector(".sidebar").style.display === "none" &&
  //   (document.querySelector(".sidebar").style.display = "inline") &&
  //   console.log('type/data', type, data);
  // // console.log('type/data', type, data);

  // console.log("res", res);
  // if (Object.keys(res)[0] === "project") {
  //   res.project = [res.project];
  //   // console.log('rest', res)
  //   type = "project";
  // } else {
  //   type = "projects";
  // }
  // let mainContent = document.querySelector(".main-content");
  let type = "project"
  res["projects"].forEach((e, i) => {
    // console.log('src/'+ e.local_url)

    let projWrapper = projects.appendChild(cecl("div", "proj-wrapper"))
    projWrapper.classList.add("proj-wrap" + e.id)
    let description, project
    if (i % 2 === 0) {
      let description = projWrapper.appendChild(cecl("div", "description"))
      description.innerHTML = "<a>project example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstack</a>"

      project = projWrapper.appendChild(cecl("div", "project"))
      project.classList.add("project" + e.id, "projectCard")
    } else {
      project = projWrapper.appendChild(cecl("div", "project"))
      project.classList.add("project" + e.id, "projectCard")

      let description = projWrapper.appendChild(cecl("div", "description"))
      description.innerHTML = "<a>project example descriptionescriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackscriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstackproject example descriptionstack</a>"
    }
    // console.log(project)
    //   if (type === "project" && window.matchMedia("(min-width: 600px)").matches) {
    //     projWrapper.style.width = "11ds0%";
    //     projWrapper.style.fontSize = "2em";
    //   }
    project.addEventListener("click", async function (evt) {
      //     //   let res = await showSingleItemm(evt, e, 'projects')
      //     //   document.querySelector('.main-content').innerHTML = ''
      //     //   navbar({ project: e })
      //     //   projects('project', { 'project': e, 'technologies': res.technologies, 'traits': res.traits })
      //     //   technologies('technologies', { 'technologies': res.technologies })
    }) // let anchor = makeElement('a', 'proj-link', project, { href: e.site_url, target: "_blank" })

    project.appendChild(cecl("div", "img-wrapper"))

    let img = project.childNodes[0].appendChild(cecl("img", "img"))
    img.src = "src/img/" + e.local_url

    let modal = project.childNodes[0].appendChild(cecl("div", "modal"))
    modal.classList.add("project-" + e.id + "-modal", "modal-slide")
    modal.appendChild(cecl("span", "modal-span"))
    modal.childNodes[0].appendChild(cecl("h2", "project-title"))
    modal.childNodes[0].childNodes[0].innerText = e.title
// console.log(e.local_url)
    // let techsDiv = makeElement("div", "techs-div", modalSpan);
    // techsDiv.style.display = "none"

    // res.technologies && res.technologies.forEach(tech => {
    //     img = makeElement("img", "tech-img", techsDiv, {
    //       src: "src/img/" + tech.local_url
    //     });
    // });
    // let linkModal = cecl("div", "link-modal")
    // imgWrapper.appendChild(linkModal)
    // // let linkModal = makeElement("div", "link-modal", imgWrapper);
    // let linkModalMore = cecl("p", "more-anchor")
    // linkModalMore.innerText = "...more"
    // linkModal.appendChild(linkModalMore)
    // let linkModalMore = makeElement("p", "more-anchor", linkModal, {
    //   innerText: "...more"
    // });
  })
}

//   linkModalMore.addEventListener("click", async evt => {
//     let res = await showSingleItemm(evt, e, "projects");

//     document.querySelector(".main-content").innerHTML = "";
//     navbar({ project: e });
//     projects("project", {
//       project: e,
//       technologies: res.technologies,
//       traits: res.traits
//     });
//     technologies("technologies", { technologies: res.technologies });
//   });

//   let linkModalSiteBtn = makeElement("button", "site-button", linkModal, {
//     innerText: "visit site"
//   });
//   linkModalSiteBtn.addEventListener("click", evt => {
//     location.href = e.site_url;
//     target = "_blank";
//   });

//   let h3;
//   let traitsDiv = makeElement("div", "traits-div", modal);
//   traitsDiv.style.display = "none"
//   res.traits &&
//     res.traits.forEach(trait => {
//       h3 = makeElement("h3", "trait", traitsDiv, { innerText: trait.name });

//     });
//   // traitsDiv.style.display = "none"

//   if (type === "project" && window.matchMedia("(min-width: 300px)").matches) {
//     console.log('300')
//     linkModalMore.style.display = "none";
//     modal.style.backgroundImage =
//       "linear-gradient(to right, rgba(255,255,255, 1),rgba(255, 255, 255, 1) )";
//       document.querySelector('.techs-div').style.display = "flex"
//       document.querySelector(".traits-div").style.display = "flex"

//     // modal:after.style.backgroundImage = 'linear-gradient(to right, rgba(150,150,150, 0.99),rgba(255, 255, 255, 1) )'
//     // console.log('testing')
//     let sidebar = document.querySelector(".sidebar");
//     // console.log("sidebar", sidebar);
//     sidebar.style.display = "none";
// })
// }
// console.log('modal', modal)
// });
