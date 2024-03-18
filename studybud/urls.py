from django.contrib import admin
from django.urls import path,include
from django.conf.urls import handler404
from base import views
from studybud import settings
from django.views.static import serve
from base.views import custom_404

handler404 = custom_404
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('api/', include('base.api.urls')),
]
