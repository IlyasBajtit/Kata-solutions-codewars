/**Description:

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	              return
name equals owner 	'Hello boss'
otherwise 	         'ello guest' */

function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
  }

  // Another solutions

  function greet (name, owner) {
    return name === owner ? 'Hello boss' :   'Hello guest';
  }