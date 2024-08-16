function initScroll(){
    const linksHref = document.querySelectorAll('.js-links a[href^="#"]');
    const sections = document.querySelectorAll('.js-sections');
    const windowHight = window.innerHeight * 0.6;

    if(linksHref && sections){

        function scrollSmooth(event){
            event.preventDefault();
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHight;
    
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    
        linksHref.forEach((linkHref) => {
            linkHref.addEventListener('click', scrollSmooth);
        });
        
    }
}
initScroll();