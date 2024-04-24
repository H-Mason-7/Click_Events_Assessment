const buttons = document.querySelector("button");
const body = document.querySelector("body");
const main = document.querySelector("main");

const firstButton = document.querySelector('#buttonOne');
const secondButton = document.querySelector('#buttonTwo');
const thirdButton = document.querySelector('#buttonThree');


firstButton.addEventListener('click', responseToClick1) 
function responseToClick1() {
    const h3FooTag = document.createElement("h3");
    h3FooTag.textContent = "Foo";
    main.appendChild(h3FooTag);
}
secondButton.addEventListener('click', responseToClick2)
function responseToClick2() {
    const h3BarTag = document.createElement("h3");
    h3BarTag.textContent = "Bar";
    main.appendChild(h3BarTag);
}
thirdButton.addEventListener('click', responseToClick3)
function responseToClick3() {
    const h2Tag = document.createElement("h2");
    h2Tag.textContent = "FooBar";
    main.appendChild(h2Tag);
}