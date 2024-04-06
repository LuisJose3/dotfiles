const dateElem = document.getElementById('date-text');

const monthTrans = {
    'January' : 'enero',
    'February' : 'febrero',
    'March' : 'marzo',
    'April' : 'abril',
    'May' : 'mayo',
    'June' : 'junio',
    'July' : 'julio',
    'August' : 'agosto',
    'September' : 'septiembre',
    'October' : 'octubre',
    'November' : 'noviembre',
    'December' : 'diciembre'
}
const dayTrans = {
    'Monday' : 'lunes',
    'Tuesday' : 'martes',
    'Wednesday' : 'miercoles',
    'Thursday' : 'jueves',
    'Friday' : 'viernes',
    'Saturday' : 'sabado',
    'Sunday' : 'domingo'
}

const options = {
    weekday : 'long',
    month : 'long',
    hour : 'numeric',
    minute : 'numeric',
    second : 'numeric'
}

function timeUpdate() {

    const date = new Date();

    const reformDate = date.toLocaleDateString('en-US', options);
    const [month, day] = reformDate.split(' ');
    
    for (let i = 0; i < reformDate.length; ++i) {

        if (!isNaN(Number(reformDate[i])) && reformDate[i] != ' ') {

            dateElem.innerText = `${monthTrans[month]} ${dayTrans[day]} ${reformDate.substring(i)}`;
            break;
        }
    }
};
timeUpdate();

setInterval(() => timeUpdate(), 1000);