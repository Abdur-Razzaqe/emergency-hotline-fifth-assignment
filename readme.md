Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
getElementByID: unique element, global scope, fastest, but no context search.

getElementByClassName: live collection, exact class match, limited to class names.

querySelector: flexible, first match, CSS selector support.

2. How do you create and insert a new element into the DOM ?

   Ans: Creating and inserting a new element into the DOM using document.creatElement() and then using appendChild() or append() attaching it.

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling is the process in the Document Object Model (DOM) where an event starts from the target element and then bubble up through its parent elements, all the way up to the document.

It works like this:
a. When a button is clicked, an event is directed to the element.
b. If an event handler is set for the element, the event handler is triggered.
c. Then the event "bubbles up" to the elements parent.
d. If an event handler is set for the parent, this event handler is triggered.
e. The event continues to bubble, until it reaches the top.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

Event delegation is useful because it saves memory, works for future elements, and makes code cleaner.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: Difference between preventDefault() and stopPropagation() methods are below:

preventDefault() Method:
a. Prevent the default action of browsers taking on that event.
b. It is a method present in the Event interface.
c. For example, it prevents the browser from following a link.
d. Its syntax is: event.preventDefault();
e. This method does not take any parameters.

stopPropagation() Method:
a. Prevent further propagation of current events by parent or child elements.
b. This method is also present in the Event interface.
c. It can not stop the default behavior of the browser.
d. Its syntax is: event.stopPropagation();
e. This method also does not take any arguments in its definition.
