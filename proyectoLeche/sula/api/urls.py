from django.conf.urls import url
from .views import (
  ClienteListAPIView,
  ProductorListAPIView
)
# from .views import (
#   ClientListAPIView,
#   ClientAddAPIView,
#   ClientDeleteAPIView,
#   ClientUpdateAPIView,
#   ClientDetailAPIView,
#   AccountCreateAPIView,
#   AccountTypeListAPIView,
#   AccountListAPIView,
#   ClientAccountsListAPIView,
#   ClientList,
# )

urlpatterns = [
  #-------------- Cliente
  url(r'^clientes/$', ClienteListAPIView.as_view(), name='lista-clientes'),
  #-------------- Productor
  url(r'^productores/$', ProductorListAPIView.as_view(), name='lista-productores'),

  
  # url(r'^client/add/$', ClientAddAPIView.as_view(), name='add-client'),
  # url(r'^client/(?P<pk>\d+)/remove/$', ClientDeleteAPIView.as_view(), name='del-client'),
  # url(r'^client/(?P<pk>\d+)/edit/$', ClientUpdateAPIView.as_view(), name='edit-client'),
  # url(r'^client/(?P<pk>\d+)/details/$', ClientDetailAPIView.as_view(), name='client-details'),
  # url(r'^client/(?P<id>\d+)/accounts/$', ClientAccountsListAPIView.as_view(), name='client-accounts'),

  # url(r'^account/add/$', AccountCreateAPIView.as_view(), name='add-account'),
  # url(r'^accounts/$', AccountListAPIView.as_view(), name='accounts'),
  # url(r'^account-types/$', AccountTypeListAPIView.as_view(), name='account-types'),

  # url(r'^client/list/new/$', ClientList.as_view(), name='client-list-new')
]
