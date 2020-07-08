export const cl = (str) => {
  // return console.log(str)
}
export const cecl = (type, str) => {
  let el = document.createElement(type)
  el.classList.add(str)
  return el
}
// export const ce = (str) => {
//     return document.createElement(str)
// }

export const ca = (el, str) => {
  return el.classList.add(str)
}

export const qs = (str) => {
  return document.querySelector(str)
}

export const qsa = (str) => {
  return document.querySelectorAll(str)
}

export const btn = (innerText, type, className) => {
  let btn = cecl('button', className)
  btn.innerText = innerText
  btn.type = type
  return btn

}

export const ac = (parent, child) => {
  // console.log('parent', parent, child)
  let x = parent.appendChild(child)
  // console.log('k', x)
  return parent.appendChild(child)
}

// export const ce = (name) => document.createElement(name)
export let ce = (element_type, className, parent, obj = {}) => {
  // console.log(parent)
  let el = document.createElement(element_type)
  let objKeys = Object.keys(obj)
  objKeys.forEach((ok) => {
    if (ok !== "") {
      el[ok] = obj[ok]
    }
  })
  // console.log(parent, el)
  el.classList.add(className)
  parent.appendChild(el)
  return el
}

export const BurgerClick = (switchBurger) => {
  //   const switchBurger = { showSidebar: true }
  console.log(switchBurger)
  const mainContent = qs(".main-content")
  const sidebar = qs(".sidebar")
  if (switchBurger.showSidebar === true) {
    sidebar.style.display = "block"

    let count = -100
    let slider = setInterval(() => {
      count += 10
      sidebar.style.transform = `translate(${count}%, 0)`

      if (count === 0) {
        clearTimeout(slider)
        switchBurger.showSidebar = false
        console.log("changeswitch", switchBurger)
      } else {
        console.log("if true", 100 / count)
        mainContent.style.width = `${-1000 / count}%`
      }
    }, 40)
  } else {
    let count = 10
    let slider = setInterval(() => {
      count -= 10
      sidebar.style.transform = `translate(${count}%, 0)`
      console.log("if false ", -count)
      mainContent.style.width = `${-count}%`
      if (count === -100) {
        console.log("if false -100", sidebar)
        sidebar.style.display = "none"
        clearTimeout(slider)
        switchBurger.showSidebar = true
      }
    }, 40)
  }
}

export const Image = (src, title, modal, site_url) => {
  // console.log(src)
  let projectImg = cecl("div", "project-img")

  let imgWrapper = cecl("div", "img-wrapper")
  projectImg.appendChild(imgWrapper)
  let div = cecl("div", "div")
  imgWrapper.appendChild(div)



  let img = div.appendChild(cecl("img", "img"))
  img.src = src
  
  console.log(img.height, img.width)
  let imgHeight = img.height > img.width ? '50%' : '100%'
  console.log('ig',imgHeight)
  // imgWrapper.style.height = imgHeight
  // img.style.height = imgHeight


  if (modal === true) {
    let modal = div.appendChild(cecl("div", "modal"))
    modal.classList.add("project-modal", "modal-slide")
    modal.appendChild(cecl("span", "modal-span"))
    modal.childNodes[0].appendChild(cecl("h2", "project-title"))
    modal.childNodes[0].childNodes[0].innerText = title

    let linkModal = cecl("div", "link-modal", imgWrapper)
    imgWrapper.firstChild.appendChild(linkModal)

    let code = cecl("button", "git-link")
    let site = cecl("button", "site-link")
    code.innerText = "code"
    site.innerText = "site"

    linkModal.appendChild(code)
    linkModal.appendChild(site)
    // console.log(code, site)
    code.addEventListener("click", (evt) => {
      window.open('https://github.com/mickmed', '_blank')
      
    })
    site.addEventListener("click", (evt) => {
     
      window.open(site_url, "_blank")
    })

    // linkModalMore.addEventListener("click", async evt => {
    //   let res = await showSingleItemm(evt, e, "projects");

    //   document.querySelector(".main-content").innerHTML = "";
    //   navbar({ project: e });
    //   projects("project", {
    //     project: e,
    //     technologies: res.technologies,
    //     traits: res.traits
    //   });
    //   technologies("technologies", { technologies: res.technologies });
    // });

    // let linkModalSiteBtn = makeElement("button", "site-button", linkModal, {
    //   innerText: "visit site"
    // });
    // linkModalSiteBtn.addEventListener("click", evt => {
    //   location.href = e.site_url;
    //   target = "_blank";
    // });
  }

  return projectImg
}
