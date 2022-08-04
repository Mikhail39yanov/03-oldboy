import JustValidate from 'just-validate'
import { disableScroll } from '../components/helper-functions/disable-scroll.js'
import { enableScroll } from '../components/helper-functions/enable-scroll.js'

const popup = document.querySelector('.popup-overlay')

popup.addEventListener('click', () => {
  enableScroll()
  popup.classList.remove('_active')
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    popup.classList.remove('_active')
    enableScroll()
  }
})

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelStyle: {
    color: '#FF3030',
  },
})

validation
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Поле должно содержать не менее 11 символов',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#checkbox-custom', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event)
    popup.classList.add('_active')
    disableScroll()
  })
