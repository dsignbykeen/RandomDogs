const dogDisplayDiv = document.getElementById('dogDiv')
const dogbutton = document.getElementById('dogbutton')

const dograndom = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => {dogDisplayDiv.innerHTML = `<img src='${json.message}' height = 400 width=360 />`})
}
dogbutton.onclick = () => dograndom()
