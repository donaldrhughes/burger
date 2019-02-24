$(".burgBtn").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).attr("data-id")
   console.log(id)
 $.ajax("/api/update/" + id, {
    type: "POST",
    data: id
  })
  .then(
    function() {
        location.reload();
      })
  .catch(
      function(err){
          if (err) throw err;
      }
  )
  
    
});

// $.get("/", function(data) {
//     console.log(data)

    //on clicks for button  to print "hello" first -- 
    //then get it to console log the ID to clientside console

    //post the backend to update devour to "1" where ID 
    // is the burgers devour

// })
