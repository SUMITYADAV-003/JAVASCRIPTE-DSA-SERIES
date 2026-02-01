from django.urls import path
from .views import categories,category_create


urlpatterns = [
    path('categories/', categories,name='Categories'),
    path('category_create/', category_create,name='CategoryCreate'),
    
]
