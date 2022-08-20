let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('buttons'))

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.innerText = ''
        break
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1)
        }
        break
      case '=':
        try {
          display.innerText = eval(display.innerText)
        } catch {
          display.innerText = 'Error!'
        }
        break
      default:
        display.innerText += e.target.innerText
    }
  })
})

// dark theme

const switchButton = document.querySelector('button')
let theme = localStorage.getItem('theme')

switchButton.addEventListener('click', () => {
  if (theme === 'dark') {
    document.querySelector('body').classList.remove('dark')
    document.querySelector('body').classList.add('light')
    theme = 'light'
  } else {
    document.querySelector('body').classList.remove('light')
    document.querySelector('body').classList.add('dark')
    theme = 'dark'
  }

  localStorage.setItem('theme', theme)
})

if (theme === 'dark') {
  document.querySelector('body').classList.add('dark')
}

if (theme === 'light') {
  document.querySelector('body').classList.add('light')
}
