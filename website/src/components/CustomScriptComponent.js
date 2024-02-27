import React, { useEffect } from 'react';

const CustomScriptComponent = () => {
    useEffect(() => {
        // Function to handle tab clicking
        const handleTabClick = (event) => {
            const tab_id = event.currentTarget.getAttribute('data-tab');
            const child_tab_id = event.currentTarget.getAttribute('data-subtab') ? "-" + event.currentTarget.getAttribute('data-subtab') : '';
            const selectorPrefix = `#${tab_id}${child_tab_id}`;

            tabLinks.forEach(link => link.classList.remove('current'));
            tabs.forEach(tab => tab.classList.remove('current'));

            event.currentTarget.classList.add('current');
            document.querySelector(selectorPrefix).classList.add('current');
            document.querySelectorAll(`[data-tab^='${tab_id}']`).forEach(tab => tab.classList.add('current'));
        };

        // Function to initialize tabs and other interactive elements
        const initializeInteractiveElements = () => {
            document.querySelectorAll('ul.tabs li').forEach(link => {
                link.addEventListener('click', handleTabClick);
            });

            document.querySelectorAll('.tabs.parents > li').forEach(tab => {
                tab.addEventListener('click', () => {
                    const clicked = tab.getAttribute('data-tab');
                    const statikSelektah = `#${clicked} .tabs > li:first-child`;
                    const installTabContentId = `#${clicked}-install`;

                    document.querySelector(statikSelektah)?.classList.add('current');
                    document.querySelector(installTabContentId)?.classList.add('current');
                });
            });

            // Consider moving GIF replay functionality into a React component
            document.querySelector('#gifReplay')?.addEventListener('click', () => {
                const gif = document.querySelector('img[src$=".gif"]:first-child');
                if (gif) {
                    const src = gif.getAttribute('src');
                    gif.setAttribute('src', src);
                }
            });

            // Adjustments for code highlighting or other features should be done via React or integrated libraries
        };

        // Adjust this to match your Docusaurus v3 structure
        const adjustTitle = () => {
            try {
                const subTitleElement = document.querySelector('.projectTitle > small');
                if (subTitleElement) {
                    const subTitle = subTitleElement.innerText;
                    const subSegments = subTitle.split(' ');
                    const newSub = subSegments.map(segment =>
                        segment === '#GetPaid' ? `<span>${segment}</span>` : `${segment} `
                    ).join('');

                    subTitleElement.innerHTML = newSub;
                }
            } catch (error) {
                console.error('Error adjusting title:', error);
            }
        };

        adjustTitle();
        initializeInteractiveElements();

        // TODO: Implement RunKit notebook initialization in a React-friendly way if needed

    }, []); // Empty dependency array ensures this runs once on mount

    return null; // This component does not render anything itself
};

export default CustomScriptComponent;
