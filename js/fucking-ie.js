/*www.fucking-ie.com*/var messageBegin="This website is";var messageImportant="too good";var messageEnd="to be viewed on Internet Explorer !";var firefox=true;var firefoxURL="http://www.mozilla.org/fr/firefox/new/";var chrome=true;var chromeURL="https://www.google.com/intl/fr/chrome/browser/?hl=fr";var opera=true;var operaURL="http://www.opera.com/";var background="#222222";var color1="#eeeeee";var color2="#faa732";var fontSize1="80";var fontSize2="14";function launchFuckingIE(){var a=document.getElementsByTagName("body")[0];a.style.background=background;a.innerHTML='<div id="fuckingIE"><h1 id="fuckingIE-Title">'+messageBegin+' <span id="fuckingIE-Span">'+messageImportant+"</span> "+messageEnd+'</h1><p id="fuckingIE-download"></p></div>';var b=document.getElementById("fuckingIE");var c=document.getElementById("fuckingIE-Title");var d=document.getElementById("fuckingIE-Span");var e=document.getElementById("fuckingIE-download");var f="";if(chrome||firefox||opera){f="Download ";if(chrome==true){f=f+'<a href="'+chromeURL+'">Chrome</a> '}if(firefox==true){if(chrome==true){if(opera==true){f=f+", "}else{f=f+"or "}}f=f+'<a href="'+firefoxURL+'">Firefox</a> '}if(opera==true){if(firefox==true){f=f+"or "}else if(chrome==true){f=f+"or "}f=f+'<a href="'+operaURL+'">Opera</a> '}}e.innerHTML=f;b.style.color=color1;b.style.width="80%";b.style.marginLeft="10%";b.style.marginTop="10%";b.style.textAlign="center";b.style.fontFamily="arial";c.style.fontSize=fontSize1+"px";c.style.textTransform="uppercase";c.style.fontWeight="bold";c.style.lineHeight=fontSize1+"px";c.style.marginBottom="-12px";d.style.color=color2;e.style.marginTop="10px";e.style.color=color1;e.style.fontSize=fontSize2+"px";e.style.lineHeight=fontSize2+"px";var g=document.getElementsByTagName("a")[1];var h=document.getElementsByTagName("a")[0];var i=document.getElementsByTagName("a")[2];g.style.color=color2;g.style.textDecoration="underline";h.style.color=color2;h.style.textDecoration="underline";i.style.color=color2;i.style.textDecoration="underline"}if(window.addEventListener)window.addEventListener("load",launchFuckingIE,false);else if(window.attachEvent)window.attachEvent("onload",launchFuckingIE);else window.onload=launchFuckingIE