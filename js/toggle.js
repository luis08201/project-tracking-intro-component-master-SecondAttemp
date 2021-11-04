const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
});