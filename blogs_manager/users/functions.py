from blogs.models import Blog, BlogPost

def create_new_blog_post(get_info_function, blog_name):
    blog_post_info_results = get_info_function()
    blog_post, created = BlogPost.objects.get_or_create(
        name=blog_post_info_results[0],
        url=blog_post_info_results[1],
        added=blog_post_info_results[2],
        blog=Blog.objects.get(name=blog_name),
    )
    blog_post.save()