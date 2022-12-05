const btnRate = document.querySelector('.btn-rate'),
rate = document.querySelector('.rate'),
thankYou = document.querySelector('.thankyou'),
selected = document.querySelector('selected'),
btnBack = document.querySelector('.btn-back');
const rateValue = document.getElementById('rate-value');
const starBtn = document.querySelectorAll('.btn');


btnRate.addEventListener('click', (e)=> {
    e.preventDefault();
    thankYou.classList.remove('hidden');
    console.log('clicked');
    rate.style.display = 'none';
    if(rateValue.innerHTML == ''){
        rateValue.innerHTML = '5';
    }
    else{

    }
    
});

btnBack.addEventListener('click', (e)=> {
    e.preventDefault();
    thankYou.classList.add('hidden');
    console.log('clicked');
    rate.style.display = 'block';
    rateValue.innerHTML = '';
});

starBtn.forEach((e)=> {
    e.addEventListener('click' , ()=>{
        rateValue.innerHTML = e.innerHTML;
    });
});