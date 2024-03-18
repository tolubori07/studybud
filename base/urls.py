from django.urls import path
from. import views

urlpatterns = [
    path('logout/', views.logoutuserpage, name = 'logout'),
    path('login/', views.loginpage, name = 'login'),
    path('register/', views.registerpage, name = 'register'),
    path('', views.home, name='home'),
    path('room/<str:pk>', views.room, name='room'),
    path('profile/<str:pk>/', views.userprofile, name='userprofile'),
    path('create-room/', views.create_room, name='create-room'),
    path('delete-room/<str:pk>/', views.delete_room, name = 'delete-room'),
    path('update-room/<str:pk>/', views.update_room, name='update-room'),
   path('delete-message/<str:pk>/', views.deleteMessage, name="delete-message"),
   path('update-user', views.updateuser, name="update-user"),
    path('topics/', views.topicpage, name="topics"),
    path('activities/', views.activitiespage, name="activity"),
]