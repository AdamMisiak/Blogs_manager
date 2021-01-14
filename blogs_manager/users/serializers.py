from rest_framework import serializers
from users.models import User

class UserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser']

# class UserDetailsSerializer(serializers.ModelSerializer):
#     blog_posts = serializers.SerializerMethodField()
#     blog_post_avg = serializers.SerializerMethodField()
#     subscribers = serializers.SerializerMethodField()

#     class Meta:
#         model = Blog
#         fields = ['name', 'url', 'author', 'genre',
#                   'language', 'blog_posts', 'subscribers',
#                   'blog_post_avg'] 

#     def get_blog_posts(self, obj):
#         return Blog.objects.filter(blog_post__blog=obj).count()

#     def get_blog_post_avg(self, obj):
#         return avg_number_of_posts_per_month(obj)

#     def get_subscribers(self, obj):
#         return Blog.objects.filter(subscribed_by__blog=obj).count()

