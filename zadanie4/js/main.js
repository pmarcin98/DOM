const submitForm = (event) => {
    event.preventDefault();

    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');
    console.log('Imię: ' + fname.value + ' Nazwisko: ' + lname.value);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);