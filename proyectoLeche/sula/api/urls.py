from django.conf.urls import url
from .views import (
  ClienteListAPIView,
  ProductorListAPIView,
  FacturaListAPIView,
  FacturaDeleteAPIView,
  TotalLecheRetrieveUpdateAPIView,
  ClienteRetrieveUpdateDestroyAPIView,
  ClienteFacturasListAPIView,
  NotaEntregaListAPIView,
  NotaEntregaDeleteAPIView,
  ProductorNotaEntregaListAPIView,
  ProductorRetrieveUpdateDestroyAPIView,
)


urlpatterns = [

   url(r'^total-leche/(?P<pk>\d+)/$', TotalLecheRetrieveUpdateAPIView.as_view(), name='client-details'),
  #-------------- Cliente
  url(r'^clientes/$', ClienteListAPIView.as_view(), name='lista-clientes'),
  url(r'^cliente/(?P<pk>\d+)/$', ClienteRetrieveUpdateDestroyAPIView.as_view(), name='cliente-detalle'),
  url(r'^cliente/(?P<id>\d+)/facturas/$', ClienteFacturasListAPIView.as_view(), name='client-factura'),

  #-------------- Productor
  url(r'^productores/$', ProductorListAPIView.as_view(), name='lista-productores'),
  url(r'^productor/(?P<pk>\d+)/$', ProductorRetrieveUpdateDestroyAPIView.as_view(), name='productor-detalle'),
  #-------------- Factura
  url(r'^facturas/$', FacturaListAPIView.as_view(), name='lista-facturas'),
  url(r'^factura/(?P<pk>\d+)/eliminar/$', FacturaDeleteAPIView.as_view(), name='eliminar-factura'),
  #-------------- Nota Entrega
  url(r'^notaEntregas/$', NotaEntregaListAPIView.as_view(), name='lista-notaEntrega'),
  url(r'^notaEntrega/(?P<pk>\d+)/eliminar/$', NotaEntregaDeleteAPIView.as_view(), name='eliminar-notaentrega'),
  url(r'^productor/(?P<id>\d+)/notaentrega/$', ProductorNotaEntregaListAPIView.as_view(), name='producto-notaentrga'),
  
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
