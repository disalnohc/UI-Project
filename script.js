//  Change Navbar bg color when Scroll
 window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1) { // ตรวจสอบว่าเลื่อนลงมามากกว่า 50px หรือไม่
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});