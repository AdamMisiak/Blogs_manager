from rest_framework import serializers
from django.contrib.auth import authenticate

from users.models import User, BlogSubscriber
from blogs.models import Blog
from blogs.serializers import BlogSerializer


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

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser'] 

    def get_subscribing(self, obj):
        subscribing_blogs = Blog.objects.filter(subscribed_by__user=obj)
        return [BlogSerializer(blog).data for blog in subscribing_blogs]
        
class BlogSubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogSubscriber
        fields = '__all__'

