/*
===============================================
INFORMATION, INSTALLTION, INCLUSION, AND SYNTAX
===============================================

jQuery is essentially a library of code that can be manipulated by the common user for their own benefit.
It's a collecton of code that has been made, developed, and edited over time to include more and more functions, while still being simplistic to use.
Once a connection between the end user and the link to the (giant) library has been established, that original file will have access to all code 
that jQuery provides.

To check if jQuery is enabled in your code file, simply open up the console in your favorite browser
 (Chrome is used in this example) (ctrl+shift+J (Cmd+Option+J for Mac)) and type in $. This will spit back 

function $(selector, [startNode]) { [Command Line API] }

if it is working correctly. Great! Now I have access to jQuery's endless list of functions.

If not, you'll see an error (such as Unexpected Identifier: "$" is not defined, or something like that).

jQuery is a great method of writing less code to accomplish more tasks. Albeit it's slightly slower than native Javascript, it's bearable and worth it 
for its endless list of functions.

To include jQuery in your code, simply make an HTML skeleton and scroll up to the <head> tag. Inbetween these (not inbetween <title></title>) type in this:

<script src= "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

This will link your webpage to the google jquery API, hosted by its CDN (content distribution/delivery network).

jQuery also interacts with CSS in your HTML files rather simply, using selectors (also very similarly to how CSS uses HTML selectors!). The only differences 
are the syntax (although that should've been expected.).

For example: 

CSS:             .body{ background-color: yellow; height: 250px;};

jQuery: 		 $("body").css({"background-color": "yellow", "height":"250"});

 You may have noticed that I included a "$" before the jQuery selector. This is simply an abbreviated method of telling jQuery "Hey, we need to pay attention to this
 and see what needs to be done about it." The other way is  jQuery("body").css({"background-color": "#123456"});

 But I don't use that notation.

 Now, some problems may arise when loading javascript (the language of jQuery is written in Javascript) on a page. For example, the Javascript may load on the 
 page far before the elements on the page will load. This is definitely a problem, as the functions will act on the elements before they're displayed! To fix
 this, we have a nice function provided by the makers of jQuery called (document).ready. For example:

 $(document).ready(function(){
	
 });

 This nice snippet of code will check that the page is ready before running the Javascript. So much nicer than having the loading problem. Between those two 
 parentheses and brackets (after the function parentheses, not inbetween them), write jQuery like you would normally.

==============
 THE FUN STUFF
 =============

 Hiding: Hiding elements on a page. Only works on elements that haven't been hidden yet.

 $("elementName").hide();

 Notice the hide() function doesn't take any parameters. This is normal for some functions, because there's no way to alter how they're hidden (well, there is,
 just not using hide(). We'll get to those next.).

 Showing: Showing elements on a page. Only works on elements that haven't been shown yet.

 $("elementName").show();

 Same thing here. No parameters to pass to show().

Fading in: Fade in elements on page. Only works on hidden elements.

$("elementName").fadeIn(x);

Notice I put "x" in the parameter section. This function can take one and only one data type parameter. A number. The number describes, in milliseconds, how
long the fading will take. 2000 milliseconds means the element will slowly disappear and be gone from the page in two seconds.

Same thing for showing: $("elementName").fadeOut(x);
But it fades them out and only works for shown elements.

Sliding: Same thing as fading, just different animation.

$("elementName").slideUp(x);
$("elementName").slideDown(x);

x takes parameters.

Animation: This is an interesting function, as it can take multiple parameters (as many as there are currently existing in jQuery) and do them at the same time. For
example, I can do this:

$("elementName").animate({
	"width": "250",
	"height": "250",
	"left": "+=250"
});

This function does multiple things at once. It sets the height and width of elementName to 250px, and it moves it right 250px. Why is it right when I stated "left"?
The "left" parameter defines an OFFSET to be set to the element, in increments. Since the offset is 250px to its LEFT side, it moves 250 px to the RIGHT side. 

===============
The click Event
===============

This is so much more useful and versatile than the others (in my opinion, although mouseenter is pretty cool too.), I made a separate section for it.

The click event checks for when an element is clicked and performs a certain action after it is clicked.

$("clickMe").click(function{
	$("clickMe").slideUp(2500);
});

This event checks for when the element "clickMe" is clicked, and if it is, it will perform a slide up (it will hide the element by animating it) over 2.5 seconds.
Note this will only happen IF AND ONLY IF the element is clicked.

Mouseenter: Checks for when the mouse enters the area that the element occupies.

$("hoverMe").mouseenter(function({
	$("hoverMe").slideDown(2500);
});

Self explanatory by now, if the mouse enters the element hoverMe, it will slide the element down to hide it over 2.5 seconds.