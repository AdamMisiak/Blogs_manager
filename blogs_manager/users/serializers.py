from rest_framework import serializers

from users.models import User
from blogs.models import Blog
from blogs.serializers import BlogSerializer

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data['email'],
            username = validated_data['username'],
            password = validated_data['password'],
        )
        return user

class UserListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser']

class UserDetailsSerializer(serializers.ModelSerializer):
    subscribing = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name',
                  'date_joined', 'is_superuser', 'subscribing'] 

    def get_subscribing(self, obj):
        subscribing_blogs = Blog.objects.filter(subscribed_by__user=obj)
        return [BlogSerializer(blog).data for blog in subscribing_blogs ]


