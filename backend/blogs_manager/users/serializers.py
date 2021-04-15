from rest_framework import serializers
from django.contrib.auth import authenticate

from users.models import User, BlogSubscriber
from blogs.models import Blog
from blogs.serializers import BlogSerializer

def check_favourite_genre(user):
    favourite_blogs = {}
    blogs = Blog.objects.filter(subscribed_by__user=user)
    for blog in blogs:
        if blog.genre in favourite_blogs.keys():
            favourite_blogs[blog.genre] += 1
        else:
            favourite_blogs[blog.genre] = 1
    number_of_favourite_genres = max(favourite_blogs.values())
    favourite_genre = list(favourite_blogs.keys())[list(favourite_blogs.values()).index(max(favourite_blogs.values()))]
    return favourite_genre
        

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data['email'],
            username = validated_data['username'],
            password = validated_data['password'],
        )
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Crudentials")

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserDetailsSerializer(serializers.ModelSerializer):
    subscribing_number = serializers.SerializerMethodField()
    favourite_genre = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'subscribing_number', 'favourite_genre',
                  'is_superuser'] 

    def get_subscribing_number(self, obj):
        subscribing_number = Blog.objects.filter(subscribed_by__user=obj).count()
        return subscribing_number

    def get_favourite_genre(self, obj):
        return check_favourite_genre(obj)
        
class BlogSubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogSubscriber
        fields = '__all__'

