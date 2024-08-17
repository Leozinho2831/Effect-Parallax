function initScroll(){
    const linksHref = document.querySelectorAll('.js-links a[href^="#"]');

    if(linksHref){

        function scrollSmooth(event){
            event.preventDefault();
            const href = this.getAttribute('href');
            const selectHref = document.querySelector(href);

                selectHref.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
        }
    
        linksHref.forEach((linkHref) => {
            linkHref.addEventListener('click', scrollSmooth);
        });
        
    }
}
initScroll();