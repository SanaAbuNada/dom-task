
//Task1 -1

console.log (document.body.lastElementChild.tagName)
console.log(document.body.children.length);


/*
children -> it takes just html tags wihout text = header / newLine / script
childrenNodes ->it takes  html tags + text + any new Line (NodeList) = newLine / header / newLine /script 
*/
const nodeCount = document.body.childNodes.length;
console.log("The Number of Node Count",nodeCount);
const elementCount = document.body.children.length;
console.log("The Number of Element Count",elementCount);
console.log("The difference between Number of Node Count and Number of Element Count ",(nodeCount - elementCount)); 


//Task1 -2-1 
// the first node is #text (textNode new line after body tag)
const firstNode = document.body.childNodes[0];
console.log(firstNode.nodeName);
console.log(firstNode.nodeType); // 1=element, 3=text, 8=comment

//Task1 -2-2
// Is the first paragraph a sibling of the second, or a descendant?
/* 
    ->it is a sibling of the second paragraph , so I will write a code to make sure that they are siblings
*/

const section = document.body.firstElementChild.nextElementSibling.firstElementChild;
const p1 = section.firstElementChild;
const p2 = p1.nextElementSibling;
console.log(p1 === p2.previousElementSibling);
console.log(p2 === p1.nextElementSibling);

//Twist 

/*
Yes I found text nodes 
Text node before header tag
Text node after header tag 
Text node after main tag
*/

/*
document.body.childNodes.forEach((node, index) => {
  if (node.nodeType === 3) { // 3 means Text Node
    console.log(` Text node at index ${index}:`, `"${node.textContent}"`);
    }
});

*/



// Task2

const div = document.createElement("div");
div.className = "card";
div.dataset.role = "admin";

const h2 = document.createElement("h2");
h2.textContent = "Access Panel";

const p = document.createElement("p");
p.textContent = "Authenticated";


div.appendChild(h2);
div.appendChild(p);
document.body.appendChild(div);


console.log(div.dataset.role); 
p.textContent = "Welcome back, Admin";
div.classList.add("authenticated","highlight");


//challange
console.log(div.classList.contains("card"));
if (div.classList.contains("card")) {
  div.classList.remove("card");
}
console.log(div.classList.contains("card"));


