document.addEventListener('DOMContentLoaded', function() {
    let tabLinks = document.querySelectorAll('ul.tabs li');
    let tabs = document.querySelectorAll('.tab-content');
    for(tabLink of tabLinks){
        tabLink.addEventListener('click',function(){
            console.log(this.getAttribute('data-tab'));
            var tab_id = this.getAttribute('data-tab');

            for(tabLink of tabLinks) {
                tabLink.classList.remove('current');
            }

            for(tab of tabs) {
                tab.classList.remove('current');
            }
    
            this.classList.add('current');
            document.querySelector("#"+tab_id).classList.add('current');
        });
    }
});