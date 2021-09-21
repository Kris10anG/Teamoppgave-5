let wrapper;
let typewriter;
let buttonContainer;
let pauseBtn;

show();
function show() {
    let html = '';
    main.innerHTML = html;

    wrapper = createElem("div", main, null, "class", "wrapper");
    typewriter = createElem("div", wrapper, null, "class", "typewriter");
    buttonContainer = createElem("div", typewriter, null, "class", "button-container");
    pauseBtn = document.createElement("div");
    pauseBtn.setAttribute("class", "pause-btn");

    for (let i = 0; i < sounds.names.length; i++) {
        let soundName = sounds.names[i];
        let soundPath = sounds.paths[i];
        let sound = new Audio(soundPath);
        
        let btn = createElem("button", buttonContainer, soundName, "class", "big-button");
    
        sound.addEventListener('play', function() { 
            buttonContainer.classList.add("animate-text");
            buttonContainer.appendChild(pauseBtn);
            pauseBtn.addEventListener("click", function() {
                sound.pause();
            });
        });

        sound.addEventListener('pause', function() {
            buttonContainer.classList.remove("animate-text");
            buttonContainer.removeChild(pauseBtn);
        });
    
        btn.addEventListener("click", function() {
            sound.play();
        });
    };

}

/**
 * Similar to the createElement function, but simplified for this apps purposes.
 * @param {string} tagName The name of an element.
 * @param {HTMLElement} parent Parent element for this new child element.
 * @param {html} html HTML for innerHTML.
 * @param {string} attrName Example: class, id, width, height..
 * @param {string} attrValue Example: wrapper, container, left-box..
 * @returns {HTMLElement}
 */
 function createElem(tagName, parent, html = '', attrName, attrValue) {
    const element = document.createElement(tagName);
    element.innerHTML = html;
    attrName ? element.setAttribute(attrName, attrValue) : attrName;
    parent.appendChild(element);
    return element;
}


