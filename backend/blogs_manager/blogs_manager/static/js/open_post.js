$('.blog-post').click(function(){
    var id;
    id = $(this).attr("data-catid");
    $.ajax(
    {
        type:"GET",
        url: '/users/blog_post_opened/',
        data:{
            blog_post_id: id
    },
    success: function( data )
    {   
        $( '#blog_post'+id ).hide();
     }
     })
     });