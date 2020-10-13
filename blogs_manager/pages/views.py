from django.shortcuts import render


def index(request):
    # listings = Listing.objects.order_by('-list_date').filter(is_published=True)[:3]

    context = {

    }

    return render(request, 'pages/index.html', context)

