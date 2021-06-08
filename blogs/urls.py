from django.urls import path, include
from .views import ReportBlogView

urlpatterns = [
    # POST TO REPORT NEW BLOG BY USER
    path('api/report_blog', ReportBlogView.as_view()),
]