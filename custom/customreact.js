function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.text
    domElement.setAttribute('href',reactElement.attributes.href)
    domElement.setAttribute('target',reactElement.attributes.target)
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    attributes:{
        href:"www.google.com",
        target:'_blank'
    },
    text:'CLICK ME ',
}
const maincontainer= document.querySelector('#root')
customRender(reactElement,maincontainer)