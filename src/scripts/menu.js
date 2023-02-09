//鼠标移入导航栏，对应出现样式
document.querySelector('.hamburger').addEventListener('click', () => {
    console.log(11);
    document.querySelector('.nav-links').classList.toggle('expanded');
    // document.querySelector('.nav-links').style.color="blue";
  
});