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

function initParallax(){
    const title = document.querySelector('.js-images h1');
    const mount2 = document.querySelector('.js-images img:nth-of-type(1)');
    const mount1 = document.querySelector('.js-images img:nth-of-type(2)');
    const bush2 = document.querySelector('.js-images img:nth-of-type(3)');
    const leaf2 = document.querySelector('.js-images img:nth-of-type(5)');
    const leaf1 = document.querySelector('.js-images img:nth-of-type(6)');

    if(title && mount2 && mount1 && bush2 && leaf2 && leaf1){
        function parallax(){
            const valueMargin = window.scrollY;

            title.style.marginTop = `${valueMargin * 1.1}px`;
            leaf1.style.marginLeft = `${-valueMargin}px`;
            leaf2.style.marginLeft = `${valueMargin}px`;
            bush2.style.marginBottom = `${-valueMargin}px`;
            mount1.style.marginBottom = `${-valueMargin * 1.1}px`;
            mount2.style.marginBottom = `${-valueMargin * 1.2}px`;
        }

        window.addEventListener('scroll', parallax);
    }
}
initParallax()