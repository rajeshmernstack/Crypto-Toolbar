let myIframe = "<iframe src='chrome-extension://nlgdabomlcgendfemkaommglmjloenpj/toolbar.html' allowtransparency='true' scrolling='no' width='100%' style='height: 40px; border: none; top: 0px; left: 0px; margin-bottom: 0px; margin-top: 0px; margin-left: 0px; z-index: 2147483647; width: 100%; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;'></iframe>"
let extra = "chrome-extension://nlgdabomlcgendfemkaommglmjloenpj/toolbar.html"
let myToolbar = document.createElement('div');
myToolbar.setAttribute('style', 'height: 20px;position: sticky;top: 0px;left: 0px;margin-bottom: 0px;margin-top: 0px;margin-left: 0px;z-index: 2147483647;width: 100%;box-sizing: border-box;');
myToolbar.innerHTML = myIframe;

document.body.insertBefore(myToolbar, document.body.firstChild);
