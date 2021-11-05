const navBar = document.querySelector('.navbar');
const content = document.querySelector('.content');
const minitab = document.querySelector('.minitab');
minitab.addEventListener('mouseover',(event) =>{
    const render = `
        <section class='tab comot' >
            <ul class="commot">
                <li><a href="#">Books</a></li>
                <li><a href="#">Sites </a></li>
                <li><a href="#">Articles </a></li>
                <li><a href="#">Works </a></li>
                <li><a href="#">More </a></li>
                <li><a href="#">Movies </a></li>
                <li><a href="#">Technology </a></li>
            </ul>
        </section>`;
    if(document.querySelector(".tab")) return;
    navBar.insertAdjacentHTML('afterend',render);
})
minitab.addEventListener('mouseout',(event) =>{
    if( !document.querySelector(".tab")) return;
    document.querySelector(".tab").remove()  
})

const obsCallback =function(entries, observer) {
    entries.forEach(entry => {
        if(entry){
            navBar.classList.add('sticky')
        }else{
            navBar.classList.remove('sticky')
        }
    })
};


const obsOptions = {
    root: null,
    threshold: 0.1,
};

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(navBar);
