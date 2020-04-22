

export const cl = (str) => {
    return console.log(str)
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
    objKeys.forEach(ok => {
        if (ok !== '') {
            el[ok] = obj[ok]
        }
    })
    // console.log(parent, el)
    el.classList.add(className)
    parent.appendChild(el)
    return el
}