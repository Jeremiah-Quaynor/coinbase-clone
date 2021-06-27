const navBar = document.querySelector('.navbar');
const content = document.querySelector('.content');
const minitab = document.querySelector('.minitab');

minitab.addEventListener('mouseover',(event) =>{
    const render = `
        <section class='tab comot' >
            <ul class="commot">
                <li><a href="#">Food </a></li>
                <li><a href="#">Boobs </a></li>
                <li><a href="#">Breast </a></li>
                <li><a href="#">Money </a></li>
                <li><a href="#">More Food </a></li>
                <li><a href="#">Movies </a></li>
                <li><a href="#">Anime </a></li>
            </ul>
        </section>`;
    if(document.querySelector(".tab")) return;
    navBar.insertAdjacentHTML('afterend',render);
})
minitab.addEventListener('mouseout',(event) =>{
    if( !document.querySelector(".tab")) return;
    document.querySelector(".tab").remove()
    
})
