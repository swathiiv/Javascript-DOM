//Examine the document object

//console.dir(document);                                        //it gives all properties and methods listed to the document

// console.log(document.domain);                                //it gives the domain name: 127.0.0.1

// console.log(document.URL);                                   // it gives the entire url: http://127.0.0.1:5000/index.html

// console.log(document.title);                                 //it gives the title of the page 'Item Lister'

// //document.title =  123;                                     //we can change the title

// console.log(document.doctype);                               //it gives the doctype '<!DOCTYPE html'

// console.log(document.head);                                  //it entire head is printed and everything in it 

// console.log(document.body);                                  //it entire body is printed and everything in it

// console.log(document.all);                                   /*it gives an array that has all the elements we have in our html file like header,title,body,meta etc....*/

// console.log(document.all[10]);                               //it gives the 10th element of that array

// document.all[10].textContent = 'Hello';                      //we are changing the content of that 10th element to 'Hello'
                                                                //the output was <h1 id="header-title">Hello</h1>
// console.log(document.forms[0]);                              //coolection of all forms is shown and all its properties are shown

// console.log(document.links);                                 //all links in the page is shown, if there is none it displays null
 
// console.log(document.images);                                 //all images in the page is shown, if there is none it displays null




//SELECTORS


// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));           //<h1 id="header-title">Item Lister</h1>
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);                                       //<h1 id="header-title">Item Lister</h1> 
// headerTitle.textContent = 'Hello';                              //<h1 id="header-title">Hello</h1>
// headerTitle.innerText = 'Goodbye';                              //<h1 id="header-title">Goodbye</h1>  //the inner text pays attention to style, but textContent doesnt pay attention to style
// console.log(headerTitle.innerText);      
// headerTitle.innerHTML = '<h3>Hello</h3>';                       // <h1 id="header-title"><h3>Hello</h3></h1> //innerhtml gets or sets the html element present
// header.style.borderBottom = 'solid 3px #000';                   //the style added will be directly shown in browser and not in console 



/*
getElementById returns a single DOM element whose ID matches your query. 
getElementsByClassName returns an HtmlCollection - an array-like structure containing the DOM elements that matched your query.
*/






// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');                
// console.log(items);                                                          //0:li.list-group-item 1:li.list-group-item 2:li.list-group-item 3:li.list-group-item
// console.log(items[1]);                                                       //1:li.list-group-item
// items[1].textContent = 'Hello 2';                                            //instead of displaying 'Item 2' as output it is changed to 'Hello 2' as output //check the index.html
// items[1].style.fontWeight = 'bold';                                          
// items[1].style.backgroundColor = 'yellow';

//items.style.backgroundColor = '#f4f4f4';                                  // Gives error: because all items are stored as array, hence use for loop as shown below

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }






// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }





/*The querySelector() method returns the first element that matches a CSS selector.

To return all matches (not only the first), use the querySelectorAll() instead.

Anything can be passed in it like the id,classname,tagname etc..*/




// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');               //it gets the first one on the page ie..'Item 1' and changes its color to red
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';                             

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';





// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');                       //<h2 class="title">Add Items</h2>      <h2 class="title">Items</h2>

// console.log(titles);
// titles[0].textContent = 'Hello';                                        //<h2 class="title">Hello</h2>

// var odd = document.querySelectorAll('li:nth-child(odd)');                //alternate coloring
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }













// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);                                            //<div id="main" class="card card-body">
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);                                 //<div class="container">
// console.log(itemList.parentNode.parentNode.parentNode);                      //<body>

// parentElement
// console.log(itemList.parentElement);                                         //<div id="main" class="card card-body">
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);                                 //<div class="container">
// console.log(itemList.parentElement.parentElement.parentElement);             //<body>


/*Same output produced by both parentElement and ParentNode in the above example*/

/*Parent Element returns null if the parent is not an element node, 
that is the main difference between parentElement and parentNode. 
in most cases, they are the same.*/




// childNodes
// console.log(itemList.childNodes);                                        //list1, list2, list3, list4 | this is a node list which is basically an array

// console.log(itemList.children);                                          //list1, list2, list3, list4 | this is a html collection
// console.log(itemList.children[1]);                                       //list2
// itemList.children[1].style.backgroundColor = 'yellow';                   //list2's background becomes yellow


/* firstChild includes the element node, text node, comment nodes etc..
whereas, firstElementChild doesnot include all of the above
Usually firstElementChild is used
Similar is the case for lastChild and lastElementChild
*/




// // FirstChild
// console.log(itemList.firstChild);                                        //list1
// // firstElementChild
// console.log(itemList.firstElementChild);                                 //list1
// itemList.firstElementChild.textContent = 'Hello 1';                      //list1 changes to Hello 1


// lastChild
// console.log(itemList.lastChild);                                         //list4
// lastElementChild
// console.log(itemList.lastElementChild);                                  //list4
// itemList.lastElementChild.textContent = 'Hello 4';                       //list4 changes to Hello 4




/* nextSibling returns the next node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.

nextElementSibling returns the next element (not text and comment nodes).*/



// nextSibling
//console.log(itemList.nextSibling);                                        //text: <h1 id="header-title">Item Lister
// // nextElementSibling
// console.log(itemList.nextElementSibling);                                //<h1 id="header-title">Item Lister

// previousSibling
// console.log(itemList.previousSibling);                                   //<h2 class="title">Items</h2>
// previousElementSibling
// console.log(itemList.previousElementSibling);                            //<h2 class="title">Items</h2>
//itemList.previousElementSibling.style.color = 'green';                    //<h2 class="title">Items</h2>  its color becomes green




// createElement

// Create a div                                                               //it creates a div, but for reference I'll draw a structure
var newDiv =  document.createElement('div');                                  //<div></div>

// Add class
newDiv.className= 'hello';                                                    //<div class='hello'></div>

// Add id
newDiv.id = 'hello1';                                                         //<div class='hello' id='hello1'></div>

// Add attr
newDiv.setAttribute('title', 'Hello Div');                                    //<div class='hello' id='hello1' title='Hello Div'></div>


// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);                                             //<div class='hello' id='hello1' title='Hello Div'>Hello World</div> 

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);






//Event Listeners
var button=document.getElementById('button').addEventListener('click',function(){
    console.log(123);
})



//Event Listeners - another way
var button=document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick() {
    console.log(123);
}



//Event Listeners - another way
var button=document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick() {
    document.getElementById('header-title').textContent='Changed me';
    document.querySelector('main').style.backgroundColor='yellow';
}



//Event Listeners - another way
var button=document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(e) {
    console.log(e); //it gives a list of things
    console.log(e.target); //it gives the element that was clicked //output is <button class="btn btn-dark btn-block" id="button">Click here</button>
    console.log(e.target.id);     //'button'       because the id for button is button
    console.log(e.target.class);  //btn btn-dark btn-block

    //instead of console log we can print it in the html page also
    var res=document.getElementById('result');
    res.innerHTML='<h3>'+e.target.id+'</h3>';

    console.log(e.type); //click  
}







//MOUSE EVENTS
var button=document.getElementById('button');
button.addEventListener('click',runEvent);
button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent); //when u click button down this event works
button.addEventListener('mouseup',runEvent);

function runEvent(e) {
    console.log('Event type'+ e.type);  //click
}


var box=document.getElementById('box');
box.addEventListener('mouseenter',myfunc); //as soon as u enter inside the box it works 
box.addEventListener('mouseleave',myfunc);
box.addEventListener('mouseover',myfunc);
box.addEventListener('mouseout',myfunc);
box.addEventListener('mouseout',myfunc); //whenever there is movement around around the box by the mouse this works

function myfunc(e) {
    console.log('Event type'+ e.type);  
}





//KEYBOARD EVENTS
var iteminput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');

iteminput.addEventListener('keydown',myevent);  //when u type something in the text box by holding the down key this event is triggered
iteminput.addEventListener('keyup',myevent);
iteminput.addEventListener('keypress',myevent); //when any key is pressed
iteminput.addEventListener('focus',myevent);    //when u focus inside the text box or when u keep the cursor inside the text box this event is triggered
iteminput.addEventListener('blur',myevent);     //opposite of focus, i.e., when u get away from text box
iteminput.addEventListener('cut',myevent);      //when u type something and cut it off, this event works
iteminput.addEventListener('paste',myevent);    //when something is pasted inside the textbox this event is triggered

function myevent(e) {
    console.log('Event type'+ e.type);  
    console.log('The value typed is '+ e.target.value);  //what ever I typed in the text box can be captured and printed in console
}


//SUBMIT EVENT
form.addEventListener('submit',function1);

function function1(e) {
    e.preventDefault();
    console.log('Event type:'+ e.type);  //Event type: submit
}





   
