$("#crAdd").click(function () {

   let crName=$("#crName").val();
   $("#creature-list").append("<div>"+crName+"</div>");
   console.log(crName);

   if(crName=="") {}
   else {
     $("#creature-list").append("<div>"+crName+"</div>");
   }
    $("#crName").val("");// write the value
//$("#crName").val();// retrive the value
});
