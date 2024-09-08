// PHONE BLOCK
const phoneinput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
   if (regExp.test(phoneinput.value)) {
       phoneSpan.innerHTML = 'Всё правильно'
       phoneSpan.style.color = 'green'
   } else {
         phoneSpan.innerHTML = 'Номер указан не верно'
         phoneSpan.style.color = 'red'
   }
}