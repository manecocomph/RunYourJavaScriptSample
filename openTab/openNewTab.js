//open new tab with URL: http://www.google.com
// see https://developer.chrome.com/extensions/tabs#method-create for more details
var googleUrl = "https://www.google.com";
chrome.tabs.create({"url": googleUrl});  

//open new tab and run some scripts
console.log("running script after document is ready!");
var script = `
  alert("I am going to search something!");
  document.getElementById("lst-ib").value = "tianxiaohui.com";
  document.querySelector("input[name='btnK'][type='submit']").click();
  `;
 
chrome.tabs.create({ url: googleUrl}, function(tab){
    console.log(tab.id);
    chrome.tabs.executeScript(tab.id,{code:script});
  });  
