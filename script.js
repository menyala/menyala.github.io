const galery = document.querySelector('.galery');
const jumbo = document.querySelector('.jumbo');

galery.addEventListener('click', function(e){

    if(e.target.classname == 'thumb'){
        jumbo.src = e.target.src;
    }
});