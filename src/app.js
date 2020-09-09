const btn = document.getElementById('button');
const cont = document.getElementById('container')
btn.addEventListener('click', () => {
  if (cont.style.height === "1000px") {
    cont.style.height = "200px"
  } else {
    cont.style.height = "1000px"
  }
})