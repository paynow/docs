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

    let gif = document.querySelector('img[src$=".gif"]:first-child');
    try {
        document.querySelector('#gifReplay').addEventListener('click', function(){
        let src = gif.getAttribute('src');
        gif.setAttribute('src', src);
        });
    }
    catch(error){}

    [].forEach.call(document.querySelectorAll('code.hljs'), function(el){
        el.parentNode.parentNode.parentNode.className = "codeContainer";
    });

    var notebook = RunKit.createNotebook({
        element: document.getElementById("nodejs-runkit"),
        source: 
        `
const Paynow = require("paynow");
let testIntegrationId = '4198';
let testIntegrationKey = '5c74798d-f9b0-42e0-9a61-a48138a7189c';
let paynow = new Paynow(testIntegrationId, testIntegrationKey);
paynow.resultUrl = "https://www.example.com/gateways/paynow/update";
paynow.returnUrl = "httpw://www.example.com/return?gateway=paynow";
let payment = paynow.createPayment("Invoice 007", "james@mailinator.com");
payment.add("Laser Guided Missile", 11.99);
payment.add("Glock 19", 5.49);

paynow.send(payment).then(response => {
    if (response.success) {
        let link = response.redirectUrl;
        console.log('Go to ' + link + ' to complete the transaction.');
}
else {
    console.log(response.error);
}
});
`
    });
});