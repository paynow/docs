document.addEventListener('DOMContentLoaded', function() {
    let parentTabLinks = document.querySelectorAll('ul.tabs > li');
    let tabLinks = document.querySelectorAll('ul.tabs li');
    let tabs = document.querySelectorAll('.tab-content');

    for(tabLink of tabLinks){
        tabLink.addEventListener('click',function(){
            var tab_id = this.getAttribute('data-tab');
            var child_tab_id = ( this.getAttribute('data-subtab') != null ) ? "-" + this.getAttribute('data-subtab') : '' ;;

            for(tabLink of tabLinks) {
                tabLink.classList.remove('current');
            }

            for(tab of tabs) {
                tab.classList.remove('current');
            }
    
            this.classList.add('current');
            document.querySelector("#"+tab_id).classList.add('current');
            document.querySelector("#"+tab_id+child_tab_id).classList.add('current');
            document.querySelector("[data-tab^='"+tab_id+"']").classList.add('current');
            //console.log("#"+tab_id+child_tab_id);

        });
    }

    // for(parentTabLink of parentTabLinks) {
    //     parentTabLink.addEventListener('click',function(){
    //         var tab_id = this.getAttribute('data-tab');
    //         var firstTabContent = document.querySelector("#" + tab_id + " .tabs > li:first-child").getAttribute('data-subtab');


    //         document.querySelector("#" + tab_id + " .tabs > li:first-child").classList.add('current');
    //         document.querySelector("#" + tab_id + " #" + tab_id +"-"+ firstTabContent).classList.add('current');
    //         //console.log(tab_id);
    //     });
    // }
});