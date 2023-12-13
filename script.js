document.addEventListener('DOMContentLoaded', function() {
    const clear = document.querySelector('.xcross')
    const search = document.querySelector('.search-bar')
    const searchfield=document.querySelector('.googlesearch')

    let search_text;  
    search.addEventListener('keyup', (e) => {
        search_text = search.value;
        if (search_text.length >= 1) {
            clear.style.display = "block";
        } else {
            clear.style.display = "none";
        }
        if(e.key==='Enter'){
            googlesearchh()
        }
    });

    searchfield.addEventListener('click',()=>{
        googlesearchh();
    })

    function googlesearchh(){
        if(search_text.length>=1){
           let url=`https://www.google.com/search?q=${search_text}`
           window.location=url
        }
    }

   
    clear.addEventListener('click', () => {
        clear.style.display = "none";
        search.value = "";
    });
});