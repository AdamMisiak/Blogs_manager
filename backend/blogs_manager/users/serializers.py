from rest_framework import serializers

from users.models import User
from blogs.models import Blog
from blogs.serializers import BlogSerializer

class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    password2 = serializers.CharField(write_only=True)

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match!")
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data['email'],
            username = validated_data['username'],
            password = validated_data['password'],
        )
        return user

    # def update(self, instance, validated_data):
    #     # ... and your update stuff ...

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

