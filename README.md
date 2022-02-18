# Closures and scopes in Javascript

## **SCOPE**

## VAR - LET - CONST

* **Var**: Accepts being re assigned an also be re declared. This may cause errors, if we don't pay attention. The advice is not to use it.
* **Let**: Can be re assign, but it can't be re declared showing an error.
* **Const**: This is a constant, so it can't be re assigned, and also don't accepts being re declared. 

## Code Blocks

A structure like an ***if*** is a code block. With **let** and **const** we can only access them inside the block. In the other hand with **var** we can access outside the block (file block.js)

## **CLOUSURE**

It is the combination of a function and the lexical scope in which it was declared. In other words a closure remembers the scope in which it was created.

## Private variables

Whit closures we can create private variables. This values will only be accessible with methods and they won't be available outside this function. (file private.js)

## **HOISTING**

The hoisting elevates the declarations, this happens at the moment our code is compiled, before being interpreted by the browser.

           ***HOISTING***
* VAR         Declaration 
* FUNCTION    Complete
* IMPORT      Complete
* CLASS       No