/*Assign to a const*/ 
const form = document.querySelector('form');
const dateDay = document.getElementById('day');
const dateMonth = document.getElementById('month');
const dateYear = document.getElementById('year');

const resultDay = document.getElementById('DD');
const resultMonth = document.getElementById('MM');
const resultYear = document.getElementById('YY');

form.addEventListener('submit', handleSubmit);

/*Takes the current date and assign a new date with the corresponding variables*/
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

/*Array of the number of days in each month*/
const months = [31,28,31,30,31,30,31,31,30,31,30,31];

/*Ensure inputs are all valid otherwise it displays red until a right date is entered*/
function validate(){
    const inputs= document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i)=>{
        const parent = i.parentElement;
        if (!i.value){
            i.style.borderColor='red';
            parent.querySelector('small').innerText = 'this field is required.';
            validator=false;
        } else if(dateMonth.value>12){
            dateMonth.style.borderColor='red';
            dateMonth.parentElement.querySelector('small').innerText='must be a valid month';
            validator=false;
        } else if(dateDay.value>31){
            dateDay.style.borderColor='red';
            dateMonth.parentElement.querySelector('small').innerText='must be a valid day';
            validator=false;    
        }else{
            i.style.borderColor='black';
            parent.querySelector('small').innerText='';
            validator=true;
        }
    })
    return validator;
}
/*the event handler function for the form submit event */
function handleSubmit(e){
    e.preventDefault();
    if(validate()){
        if (dateDay.value > day){
            day = day + months[month-1];
            month = month-1;
        }
        if(dateMonth.value > month){
            month= month + 12;
            year= year - 1;
        }
        const d = day- dateDay.value;
        const m = month- dateMonth.value;
        const y = year- dateYear.value;

        resultDay.innerHTML= d;
        resultMonth.innerHTML= m;
        resultYear.innerHTML= y;
    }
}
