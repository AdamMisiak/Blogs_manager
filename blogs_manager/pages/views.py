from django.shortcuts import render


def index(request):
    # listings = Listing.objects.order_by('-list_date').filter(is_published=True)[:3]
    # blogs = Blog.objects.all()
    # trading_for_a_living = get_info_from_trading_for_a_living()
    # blog_post, created = BlogPost.objects.get_or_create(
    #     name=trading_for_a_living[0],
    #     url=trading_for_a_living[1],
    #     added=trading_for_a_living[2],
    #     blog=Blog.objects.get(name="Trading for a living"),
    # )
    # blog_post.save()

    context = {}

    return render(request, "pages/index.html", context)
