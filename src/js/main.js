const frameworksText = ['Node.js', 'Angular', 'React', 'Jquery', 'Django'];
const databasesText = ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'SQLite'];
const toolsText = ['npm', 'Webpack', 'Gulp', 'Grunt'];

const frameworksInputs = document.querySelectorAll('input[name=frameworks]');
// console.log('frameworksInputs: ', frameworksInputs);

const databasesInputs = document.querySelectorAll('input[name=databases]');
// console.log('databasesInputs: ', databasesInputs);

const toolsInputs = document.querySelectorAll('input[name=tools]');
// console.log('toolsInputs: ', toolsInputs);

function createLabel(elm, i, textArray) {
   let label = document.createElement('label');
   // Give each input a unique id
   elm.id = `${elm.name}_${i}`
   // Give each label a `for` attribute that matches its corresponding input's `id` attribute. 
   label.htmlFor = elm.id;
   label.className = 'inline';
   label.textContent = textArray[i];
   elm.after(label);
   const br = document.createElement('br');
//    label.after(br);

   if (i !== textArray.length - 1) {
       label.after(br);
   }

   // Add spacing to last element in the list
   if (i === textArray.length - 1) {
       label.className = 'inline spacing-bottom';
   }
}

function iterate(elmArray, textArray) {
    for (let i = 0; i < elmArray.length; i++) {
        createLabel(elmArray[i], i, textArray);
    }
}

iterate(frameworksInputs, frameworksText);
iterate(databasesInputs, databasesText);
iterate(toolsInputs, toolsText);

// Select all label elements without the `for` attribute
// const headingLabels = document.querySelectorAll('label:not([for])');
// console.log('headingLabels: ', headingLabels);
// for (let i = 0; i < headingLabels.length; i++) {
//     headingLabels[i].className = 'spacing';
// }

/* ========================================================================== */
// DOM MANIPULATION

// MY TEST - CHILDNODE.AFTER()
// let p = document.createElement('p');
// let h1 = document.querySelector('h1');
// console.log('h1: ', h1);
// p.innerHTML = 'test, test, test';
// h1.after(p); /* vary methods */

// MDN EXAMPLE - CREATING & APPENDING NODES
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

// document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 

//   // and give it some content 
//   var newContent = document.createTextNode("Hi there and greetings!"); 

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementsByClassName("grid-container")[0]; 
//   document.body.insertBefore(newDiv, currentDiv); 
// }

/* ========================================================================== */
// DOM APIs

/*
document.querySelectorAll()
document.createElement(tagName)
Element.className
Element.id
HTMLLabelElement.htmlFor
Node.textContent
ChildNode.after()
 */

 /* ========================================================================== */
 // SCOPE CHAIN

 /*
 function iterate(elmArray, textArray) {
    for (let i = 0; i < elmArray.length; i++) {
        createLabel(elmArray[i], i, textArray);
    }
}

iterate(frameworksInputs, frameworksText);

Global variable environment
frameworksInputs, frameworksText

`iterate` variable environment
elmArray, textArray, i + outerLexicalEnvironment

`createLabel` variable environment
outerLexicalEnvironment
*/