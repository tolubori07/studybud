from django.contrib import admin
from django.urls import path,include
from django.conf.urls import handler404
from base import views
from studybud import settings
from django.views.static import serve
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('api/', include('base.api.urls')),
]
