function initScroll(){
    const linksHref = document.querySelectorAll('.js-links a[href^="#"]');
    const sections = document.querySelectorAll('.js-sections');

    if(linksHref && sections){

        function scrollSmooth(event){
            event.preventDefault();
            sections.forEach((section) => {

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