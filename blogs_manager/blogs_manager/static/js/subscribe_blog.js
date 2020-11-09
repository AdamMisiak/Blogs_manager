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
        if($( '#blog'+id ).text() == 'Subscribe'){
            $( '#blog'+ id ).removeClass('button subscribe-button');
            $( '#blog'+ id ).text('Unsubscribe');
            $( '#blog'+ id ).addClass('button unsubscribe-button');
        }
        else if($( '#like'+ id ).text() == 'Delete'){
            $( '#like'+ id ).removeClass('btn btn-danger btn-lg');
            $( '#like'+ id ).text('Add');
            $( '#like'+ id ).addClass('btn btn-primary btn-lg');
        }
     }
     })
     });