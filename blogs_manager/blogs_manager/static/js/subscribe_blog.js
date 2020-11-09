$('.subscribe-button').click(function(){
    var id;
    id = $(this).attr("data-catid");
    $.ajax(
    {
        type:"GET",
        url: '/blogs/subscribed/',
        data:{
            blog_id: id
    },
    success: function( data )
    {
        console.log(id)
     }
     })
     });