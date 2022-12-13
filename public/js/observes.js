const primerTransicion = document.querySelector('.tarjeta-btn')

const primerT = document.getElementsByClassName('page-1')
primerTransicion.addEventListener('click', () => {
    const htmlArr = Array.from(primerT)
    htmlArr.forEach(el => el.classList.toggle('hidden'))

})
