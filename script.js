var input = document.getElementById('input')
var btn = document.getElementById('btn')
var output = document.getElementById('output')

btn.addEventListener('click', ()=> {
    var url = "https://api.funtranslations.com/translate/yoda.json"
    fetch(url + '?text=' + input.value)
    .then(res => res.json())
    .then(json => {
    output.innerText = json.contents.translated
    }).catch(error => {
    alert('Error')
    console.log(error)
    })
})