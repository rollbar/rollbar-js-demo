(function(window, document){
function buildArray() {
  return [1, 2, 3];
}

function badArrayAccess() {
  var arr = buildArray();
  return choice(arr);
}

function caughtBadArrayAccess() {
  try {
    return badArrayAccess();
  } catch (e) {
    Rollbar.error("Bad array access!", e);
    //Rollbar.error(e);
  }
}
})(window, document);