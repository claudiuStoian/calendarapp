"""calendarapi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_jwt.views import obtain_jwt_token
from events import views as eviews
from contact import views as cviews
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('rest_framework.urls')),
    url(r'^api/api-token-auth', obtain_jwt_token),
    url(r'^api/register/$', eviews.CreateUser.as_view()),
    url(r'^api/events/$', eviews.EventList.as_view()),
    url(r'^api/events/(?P<pk>[0-9]+)/$', eviews.EventDetail.as_view()),
    url(r'^api/contact/$', cviews.ContactList.as_view()),
    url(r'^api/contact/(?P<pk>[0-9]+)/$', cviews.ContactDetail.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
