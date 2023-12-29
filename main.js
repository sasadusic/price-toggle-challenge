const toggleBtn = document.querySelector('#toggle')
const monthly = document.querySelectorAll('.monthly')
const annually = document.querySelectorAll('.annually')
console.log(monthly)
console.log(annually)
toggleBtn.onclick = () => {
    toggleBtn.classList.toggle('toggle-monthly')
    monthly.forEach(mon => mon.classList.toggle('active'))
    annually.forEach(ann => ann.classList.toggle('active'))
}