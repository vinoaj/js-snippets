// Find all phone links on the page
document.querySelectorAll('a[href^="tel:"]').forEach(function(el){
    el.addEventListener('click', function(e){
        console.log(el);
        console.log('Tel clicked: ', el.getAttribute('href'));
    }, false);
});


// Find all links to PDF on the page
linksPdf = document.querySelectorAll('a[href*=".pdf"]');
linksPDF = document.querySelectorAll('a[href*=".PDF"]');
linksPdfPDF = document.querySelectorAll('a[href*=".PDF"], a[href*=".pdf"]');
linksPdf.concat(linksPDF);