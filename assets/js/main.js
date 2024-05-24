/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// certificates
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certificateModal');
    const certificateGallery = document.getElementById('certificateGallery');
    const closeBtn = document.querySelector('.close');
    const certificatesImages = document.querySelectorAll('.certificates__img');
  
    certificatesImages.forEach(img => {
      img.addEventListener('click', () => {
        const institute = img.getAttribute('data-institute');
        showCertificates(institute);
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    function showCertificates(institute) {
      let certificatesHTML = '';
  
      // Dummy data for illustration purposes
      const certificatesData = {
        institute1: [
          'path/to/certificate1.jpg',
          'path/to/certificate2.jpg'
        ],
        institute2: [
          'path/to/certificate3.jpg',
          'path/to/certificate4.jpg'
        ]
      };
  
      const certificates = certificatesData[institute];
      if (certificates) {
        certificates.forEach(cert => {
          certificatesHTML += `<img src="${cert}" alt="Certificate" class="modal-certificate">`;
        });
      }
  
      certificateGallery.innerHTML = certificatesHTML;
    }
  });
  