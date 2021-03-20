from rest_framework.pagination import PageNumberPagination

class BlogPostPageNumberPagination(PageNumberPagination):
    page_size=20

class BlogPageNumberPagination(PageNumberPagination):
    page_size=10