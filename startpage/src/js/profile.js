const img = document.querySelector('#img-profile img');
const inp = document.getElementById('inp-profile');

const imgLocal = JSON.parse(localStorage.getItem('imgSave'));

img.src = imgLocal.path || `/home/luis/startpage/src/images/Anko Uguisu - Yofukashi no Uta.jpeg`;

inp.onchange = () => {

    const fReader = new FileReader();
    fReader.readAsDataURL(inp.files[0]);
    fReader.onloadend = event => {

        img.src = event.target.result;
        localStorage.setItem('imgSave', JSON.stringify({path: event.target.result}));
    }
}