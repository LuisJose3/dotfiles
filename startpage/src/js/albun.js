const imgs = document.querySelectorAll('.album-element');
const viewer = document.getElementById('img-viewer');
const imgViewer = document.querySelector('#img-viewer .img-content img');

imgs.forEach( img => {

    img.onclick = () => {
        
        viewer.showModal();
        console.log(img.firstElementChild)
        imgViewer.src = img.firstElementChild.src;
    };
});