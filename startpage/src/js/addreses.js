const links = JSON.parse(localStorage.getItem('addreses')) || [];
const btnAdd = document.getElementById('btn-addres-add');
const btnConfirmAdd = document.getElementById('confirm-add-addres');
const modalAdd = document.getElementById('modal-addres-add');
const contentLinks = document.getElementById('addres-group');

btnAdd.onclick = () => {

    modalAdd.showModal();
}

btnConfirmAdd.onclick = () => {

    const fields = document.querySelectorAll('#modal-addres-add input');
    let checks = 0;

    fields.forEach( f => {
        if (f.value != '')
            ++checks;
    });

    checks === fields.length ? addListAddres(fields[0].value, fields[1].value) : alert('campos faltantes');
}

function setBtnErase() {

    const btns = document.querySelectorAll('.link-erase');

    btns.forEach( btn => {
        btn.onclick = () => {

            const name = btn.previousElementSibling.textContent;
            console.log(name);

            links.forEach( (link, i) => {
                
                if (link.name === name){
                    
                    links.splice(i, 1);
                    localStorage.setItem('addreses', JSON.stringify(links));
                }
            });

            refreshListAddres();
        }
    })
}

function refreshListAddres() {

    const html = [];

    links.forEach( link => {

        html.push(`
        <div class="link">
            <div class="link-icon"><i class="fa-solid fa-link"></i></div>
            <div class="link-name"><a target="_blank" ${link.addres.includes('https://') ? `href="${link.addres}"` : `href="https://${link.addres}"`}>${link.name}</a></div>
            <div class="link-erase"><i class="fa-solid fa-eraser"></i></div>
        </div>
        `);
    });

    contentLinks.innerHTML = html.join('');
    setBtnErase();
}
refreshListAddres();

function addListAddres(name, link) {

    links.push({name: name, addres: link});
    localStorage.setItem('addreses', JSON.stringify(links));
    modalAdd.close();

    refreshListAddres();
}