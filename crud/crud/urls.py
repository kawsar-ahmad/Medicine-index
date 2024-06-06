
from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.DetailsTable.as_view()),
    path('updatee/<int:id>', views.DetailsUpdateTable.as_view()),
    path('delete/<int:id>', views.DetailsDeleteTable.as_view()),
]
