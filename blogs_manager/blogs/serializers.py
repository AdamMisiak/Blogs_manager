from rest_framework import serializers
from .models import Blog, BlogPost

class BlogListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'

class BlogDetailsSerializer(serializers.ModelSerializer):
    number_of_blog_posts = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['name', 'url', 'author', 'genre', 'language', 'number_of_blog_posts'] 

    def get_number_of_blog_posts(self, obj):
        return BlogPost.objects.filter(blog=obj).count()

