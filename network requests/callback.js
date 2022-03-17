let magicCode = {
  name: 'name',
  fantasy: 'programer',
};


function loadScript(src, callback) {
  
  let script = document.createElement("script");

  script.src = src;

  document.body.append(script);

  script.onload = () => callback(script);
}

loadScript("callback2.js", function() {
  newFunction();
});

function createTag() {
  let p = document.createElement("p");
  p.append("Hello world");
  document.body.append(p);
}






