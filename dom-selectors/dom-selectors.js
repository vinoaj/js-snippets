// Find all phone links on the page
document.querySelectorAll('a[href^="tel:"]').forEach(function(el){
    el.addEventListener('click', function(e){
        console.log(el);
        console.log('Tel clicked: ', el.getAttribute('href'));
    }, false);
});