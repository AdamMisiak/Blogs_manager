from django.contrib.auth.models import User

from rest_framework import generics, viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action

from knox.models import AuthToken
from knox.auth import TokenAuthentication

from blogs_manager.pagination import BlogPageNumberPagination
from blogs.models import Blog
from blogs.serializers import BlogSerializer
from users.models import BlogSubscriber
from users.filters import BlogSubscriberFilter
from users.serializers import UserDetailsSerializer, UserSerializer, BlogSubscriberSerializer, \
                              RegisterSerializer, LoginSerializer
                              
class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        
        return Response({
            "user": UserSerializer(
                user, 
                context=self.get_serializer_context())
            .data,
            "token": token
        })

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        
        return Response({
            "user": UserSerializer(
                user, 
                context=self.get_serializer_context())
            .data,
            "token": token
        })

class UserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = (TokenAuthentication,)
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = UserDetailsSerializer
    pagination_class = BlogPageNumberPagination

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserDetailsSerializer(instance)
        return Response(serializer.data)

    @action(methods=['get'], detail=True)
    def subscribed_blogs(self, request, *args, **kwargs):
        instance = self.get_object()
        subscribed_blogs = Blog.objects.filter(subscribed_by__user=instance)
        serializer = BlogSerializer(subscribed_blogs, many=True)
        return Response(serializer.data)


class BlogSubscriberView(generics.GenericAPIView):
    serializer_class = BlogSubscriberSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        blog_id = request.data['blog']
        user_id = request.data['user']
        status="subscribed"
        
        blog = Blog.objects.get(id=blog_id)
        user = User.objects.get(id=user_id)

        blog_subscriber, created = BlogSubscriber.objects.get_or_create(
            user = user,
            blog = blog
        )

        if not created:
            blog_subscriber.delete()
            status="Unsubscribed"

        return Response({
            "blog": blog_id,
            "user": user_id,
            "status": status
        })
