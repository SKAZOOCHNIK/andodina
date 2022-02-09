const openPopUp = document.getElementById('1');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    popUp.classList.add ('active');
}
)
closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active');
})
window.onscroll = function showHeader() 
{
    let header = document.querySelector(".header");
    if(window.pageYOffset > 200)
    {
        header.classList.add('header_fixed');
    }
    else
    {
        header.classList.remove('header_fixed');
    }
}