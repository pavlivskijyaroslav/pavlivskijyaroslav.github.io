window.onload = () =>{



    //none-block
    document.querySelectorAll('.externaltype__services').forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.parentElement.parentElement.querySelector('.innertype__services').classList.toggle('active')
            item.querySelector('.circle').classList.toggle('trans')

        })
    })
    document.querySelectorAll('.externaltype__services').forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            item.parentElement.parentElement.querySelector('.circle').classList.toggle('mousehover')
        })
        item.addEventListener('mouseout', ()=>{
            item.parentElement.parentElement.querySelector('.circle').classList.toggle('mousehover')
        })
    })


    //scroll
    let buttonToTop = document.getElementById('btn__top');

    window.addEventListener('scroll', () =>{
        if(window.pageYOffset >=1000){
            buttonToTop.style.display = 'block';
        }else{
            buttonToTop.style.display = 'none';
        }
    })
    buttonToTop.addEventListener('click', () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}







