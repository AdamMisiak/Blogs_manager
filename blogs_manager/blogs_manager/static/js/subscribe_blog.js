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
        else if($( '#blog'+ id ).text() == 'Unsubscribe'){
            $( '#blog'+ id ).removeClass('button unsubscribe-button');
            $( '#blog'+ id ).text('Subscribe');
            $( '#blog'+ id ).addClass('button subscribe-button');
        }
     }
     })
     });