from rest_framework import serializers

from users.models import User
from blogs.models import Blog
from blogs.serializers import BlogDetailsSerializer

class UserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser']

class UserDetailsSerializer(serializers.ModelSerializer):
    subscribing = serializers.SerializerMethodField()

    class Meta:
        model = User
        depth = 1
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser', 'subscribing'] 

    def get_subscribing(self, obj):
        subscribing_blogs = Blog.objects.filter(subscribed_by__user=obj)
        return [BlogDetailsSerializer(blog).data for blog in subscribing_blogs ]


