
const toggle = document.getElementById('modoToggle')
const body = document.body

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
  body.classList.toggle('light-mode')
  if (body.classList.contains('dark-mode')) {
    toggle.textContent = 'Modo Claro'
  } else {
    toggle.textContent = 'Modo Escuro'
  }
})
