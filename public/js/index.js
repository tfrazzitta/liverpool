var Arrayposition;

$(document).on("click",".click",function() {
$(".content-placeholder").empty();
Arrayposition= $(this).attr('num');
console.log(context.merchandise[Arrayposition])
// window.location.replace("file:///C:/Users/tfraz/Desktop/liverpool/index-2.html");
var theTemplateScript = $("#example-template").html();
var theTemplate = Handlebars.compile(theTemplateScript);
console.log(context.merchandise[Arrayposition])
var theCompiledHtml = theTemplate(context.merchandise[Arrayposition]);
$(".content-placeholder").append(theCompiledHtml);
$('#exampleModal').modal('toggle');

})






 $(function (){
  var theTemplateScript = $("#example-template-1").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  context;
 // Pass our data to the template
  var theCompiledHtml = theTemplate(context);
  // Add the compiled html to the page
  console.log(theCompiledHtml)
  //$(".boom").append(theCompiledHtml);
  $(document.body).append(theCompiledHtml);

});




// var theTemplateScript = $("#example-template").html();
// var theTemplate = Handlebars.compile(theTemplateScript);
// console.log(context.merchandise[0])
// var theCompiledHtml = theTemplate(context.merchandise[1]);
// console.log(theCompiledHtml)
// $(document.body).append(theCompiledHtml);






// $(function (Arrayposition) {
//   // Grab the template script
//   var theTemplateScript1 = $("#address-template-1").html();
//   console.log(Arrayposition);

//   // Compile the template
//   var theTemplate1 = Handlebars.compile(theTemplateScript1);
//  // Define our data object
//   var context1={
//     "price1":context.merchandise[Arrayposition].price,
//     "item1":context.merchandise[Arrayposition].item,
//     "text1":context.merchandise[Arrayposition].text,
//     "img1":context.merchandise[Arrayposition].src
//   };
// console.log(context1)
//   // Pass our data to the template
//   var theCompiledHtml1 = theTemplate(context1);

//   // Add the compiled html to the page
//   $('.content-placeholder-1').html(theCompiledHtml1);
//   $(document.body).append(theCompiledHtml1);
// });
