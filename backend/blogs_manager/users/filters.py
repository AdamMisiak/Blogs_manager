from django_filters import FilterSet, CharFilter, NumberFilter

from users.models import User, BlogSubscriber

class BlogSubscriberFilter(FilterSet):
    user_id = NumberFilter(field_name='user')
    blog_id = NumberFilter(field_name='blog')

    class Meta:
        model = BlogSubscriber
        fields = [
            'user_id',
            'blog_id'
        ]
