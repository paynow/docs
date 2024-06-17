import React, { useEffect } from 'react';

const CustomScriptComponent = () => {
    useEffect(() => {
        try {
            var subTitle = document.querySelector('.projectTitle > small').innerText;
            var subSegments = subTitle.split(' ');
            var newSub = '';
    
            subSegments.forEach(function(i){
            if (i === '#GetPaid') {
                newSub += '<span>' + i + '</span>';
            }
            else {
                newSub += i + ' ';
            }
            });
    
            document.querySelector('.projectTitle > small').innerHTML = newSub;
        }
        catch (error) {
    
        }
    
        // TODO: Refactor this vomit of tabs code. Can definitely be better written, this shyte
        let parentTabLinks = document.querySelectorAll('ul.tabs > li');
        const tabLinks = document.querySelectorAll('ul.tabs li');
        const tabs = document.querySelectorAll('.tab-content');
    
        tabLinks.forEach(tabLink=> {

      
            tabLink.addEventListener('click',function(){
                var tab_id = this.getAttribute('data-tab');
                var child_tab_id = ( this.getAttribute('data-subtab') != null ) ? "-" + this.getAttribute('data-subtab') : '' ;;
    
                tabLinks.forEach(tabLink=> {
                    tabLink.classList.remove('current');
                })
    
                tabs.forEach(tab=> {
                    tab.classList.remove('current');
                })
        
                this.classList.add('current');
                document.querySelector("#"+tab_id).classList.add('current');
                document.querySelector("#"+tab_id+child_tab_id).classList.add('current');
                document.querySelector("[data-tab^='"+tab_id+"']").classList.add('current');
                //console.log("#"+tab_id+child_tab_id);
    
            });
        });
    
        try {
            [].forEach.call(document.querySelectorAll('.tabs.parents > li'), function(i){
                i.addEventListener('click', function(){
                   const  clicked = this.getAttribute('data-tab');
                    const statikSelektah = "#" + clicked + " .tabs > li:first-child";
                   const  installTabContentId = '#' + clicked + '-install';
                    //console.log(statikSelektah);
                    document.querySelector(statikSelektah).classList.add('current');
                    document.querySelector(installTabContentId).classList.add('current');
                });
            });
        } catch (error) {
            
        }
        // TODO: Refactor this vomit of tabs code. Can definitely be better written, this shyte
    
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
        
        try {
                var notebook = RunKit.createNotebook({
                    element: document.getElementById("nodejs-runkit"),
                    source: 
                    `
            const { Paynow } = require("paynow");
            let testIntegrationId = '4198';
            let testIntegrationKey = '5c74798d-f9b0-42e0-9a61-a48138a7189c';
            let paynow = new Paynow(testIntegrationId, testIntegrationKey);
            paynow.resultUrl = "https://www.example.com/gateways/paynow/update";
            paynow.returnUrl = "httpw://www.example.com/return?gateway=paynow";
            let payment = paynow.createPayment("Invoice 007", "james@mailinator.com");
            payment.add("Apples", 11.99);
            payment.add("Oranges", 5.49);
    
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
            }
        catch(error){
            //do nothing
        }

        // TODO: Implement RunKit notebook initialization in a React-friendly way if needed

    }, []); // Empty dependency array ensures this runs once on mount

    return null; // This component does not render anything itself
};

export default CustomScriptComponent;
