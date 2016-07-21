// declare your functions here...
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  var img = $('img')[$('img').length - 1]
  return $(img)
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('div')
}

function firstListItem() {
  return $('ul li:first-child')
}
