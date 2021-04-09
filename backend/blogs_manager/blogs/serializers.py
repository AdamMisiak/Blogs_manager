from rest_framework import serializers
from .models import Blog, BlogPost, BlogPhoto
from users.models import BlogPostOpened


def avg_number_of_posts_per_month(blog):
    posts_in_month = {}
    blog_posts = BlogPost.objects.filter(blog=blog).order_by('-date', 'name')
    for post in blog_posts:
        if post.date.month in posts_in_month.keys():
            posts_in_month[post.date.month] += 1
        else:
            posts_in_month[post.date.month] = 1
    average = round(blog_posts.count()/len(posts_in_month), 2)
    return average


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = '__all__'

class BlogListSerializer(serializers.ModelSerializer):
    last_post_added = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['id', 'name', 'url', 'author', 'genre',
                  'language', 'last_post_added'] 
    
    def get_last_post_added(self, obj):
        return BlogPost.objects.filter(blog=obj).order_by('-date').first().date

class BlogDetailsSerializer(serializers.ModelSerializer):
    last_post_added = serializers.SerializerMethodField()
    blog_posts = serializers.SerializerMethodField()
    blog_post_avg = serializers.SerializerMethodField()
    subscribers = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ['name', 'url', 'author', 'genre',
                  'language', 'blog_posts', 'last_post_added', 
                   'subscribers', 'blog_post_avg'] 

    def get_last_post_added(self, obj):
        return BlogPost.objects.filter(blog=obj).order_by('-date').first().date

    def get_blog_posts(self, obj):
        return Blog.objects.filter(blog_post__blog=obj).count()

    def get_blog_post_avg(self, obj):
        return avg_number_of_posts_per_month(obj)

    def get_subscribers(self, obj):
        return Blog.objects.filter(subscribed_by__blog=obj).count()

class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = '__all__'

class BlogPostDetailsSerializer(serializers.ModelSerializer):
    blog = BlogSerializer()

    class Meta:
        model = BlogPost
        fields = '__all__'

class BlogPhotoDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPhoto
        fields = ['id', 'photo']

class BlogPostOpenedDetailsSerializer(serializers.ModelSerializer):
    blog_post = BlogPostSerializer()

    class Meta:
        model = BlogPostOpened
        fields = ['id', 'blog_post', 'date']
