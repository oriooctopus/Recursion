// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var answer = [];
  function goThroughChildren(currentElement) {
    var classList = currentElement.classList;
    for (var i = 0; i < classList.length; i++) {
      if (classList[i] === className) {
        answer.push(currentElement);
        break;
      }
    }
    var newArray = [];
    var currentChildren = currentElement.childNodes;
    currentChildren.forEach(function(element) {
      if (element.nodeType == Node.ELEMENT_NODE) {
        newArray.push(element);
      }
    })
    if (newArray.length >= 1) {
      newArray.forEach(function(element) {
        goThroughChildren(element);
      })
    }
  }
  goThroughChildren(document.body);
  return answer;
};
