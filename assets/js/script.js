document.getElementById('all').addEventListener('click', function(){
    document.getElementById('lmenu').classList.remove('lm')
    document.getElementById('x').style.display = "flex"
    document.getElementById('fullsc').style.display = 'flex'

})
document.getElementById('x').addEventListener('click', function(){
  document.getElementById('lmenu').classList.add('lm')
    document.getElementById('x').style.display = "none"
    document.getElementById('fullsc').style.display = 'none'

})
document.getElementById('activDnMenu').addEventListener('click' , function(){
  
  document.getElementById('dnMenu').classList.toggle('d2')
  document.getElementById('_icon1').classList.toggle('bi-chevron-down')
  document.getElementById('_icon1').classList.toggle('bi-chevron-up')


})
document.getElementById('activDnMenu2').addEventListener('click' , function(){
  
  document.getElementById('dnMenu2').classList.toggle('d2')
  document.getElementById('_icon2').classList.toggle('bi-chevron-down')
  document.getElementById('_icon2').classList.toggle('bi-chevron-up')


})