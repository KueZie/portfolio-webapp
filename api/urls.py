from django.urls import path

from . import views

urlpatterns = [
    path('status/', views.status),
    path('github_pinned_repos/', views.github_pinned_repos)
]
