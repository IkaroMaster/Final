from sula.models import Cliente,Productor,NotaEntrega,Factura,TotalLeche
from rest_framework.generics import (
  ListAPIView,
  CreateAPIView,
  DestroyAPIView,
  UpdateAPIView,
  ListCreateAPIView,
  RetrieveAPIView,
  RetrieveUpdateAPIView,
  RetrieveUpdateDestroyAPIView
)

from .serializers import (
  ClienteSerializer,
  ProductorSerializer,
  NotaEntregaSerializer,
  FacturaSerializer,
  TotalLecheSerializer
)

from rest_framework import status, permissions

class TotalLecheRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = TotalLeche.objects.all()
    serializer_class = TotalLecheSerializer

# ----------------Cliente

class ClienteListAPIView(ListCreateAPIView):
  queryset = Cliente.objects.all()
  serializer_class = ClienteSerializer

class ClienteRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer


#-----------------Productor
class ProductorListAPIView(ListCreateAPIView):
    queryset = Productor.objects.all()
    serializer_class = ProductorSerializer
class ProductorRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Productor.objects.all()
    serializer_class = ProductorSerializer
#----------------Factura

class FacturaListAPIView(ListCreateAPIView):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer

class FacturaDeleteAPIView(DestroyAPIView):
  queryset = Factura.objects.all()
  serializer_class = FacturaSerializer

class ClienteFacturasListAPIView(ListAPIView):
  serializer_class = FacturaSerializer

  def get_queryset(self):
    cliente = Cliente.objects.get(pk = self.kwargs['id'])
    return Factura.objects.filter(cliente = cliente)

#----------------------Nota Entrega----------------------------
class NotaEntregaListAPIView(ListCreateAPIView):
    queryset = NotaEntrega.objects.all()
    serializer_class = NotaEntregaSerializer

class NotaEntregaDeleteAPIView(DestroyAPIView):
    queryset = NotaEntrega.objects.all()
    serializer_class = NotaEntregaSerializer

class ProductorNotaEntregaListAPIView(ListAPIView):
  serializer_class = NotaEntregaSerializer

  def get_queryset(self):
    productor = Productor.objects.get(pk = self.kwargs['id'])
    return NotaEntrega.objects.filter(productor = productor)
#------------------------------------------------------------------
# class ClientAddAPIView(CreateAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientAddSerializer

 
# from rest_framework import mixins, generics
# from rest_framework.parsers import JSONParser, MultiPartParser, FormParser

# class ClientList(mixins.ListModelMixin,
#                      mixins.CreateModelMixin,
#                      generics.GenericAPIView):
#     """
#      List all restaurant, or create a restaurant
#     """
#     #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
#     parser_classes = (JSONParser, MultiPartParser, FormParser,)
#     queryset = Client.objects.all()
#     serializer_class = ClientAddSerializer

#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)

#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

# class ClientAccountsListAPIView(ListAPIView):
#   serializer_class = AccountSerializer

#   def get_queryset(self):
#     client = Client.objects.get(pk = self.kwargs['id'])
#     return Account.objects.filter(owner = client)

# class AccountListAPIView(ListAPIView):
#   queryset = Account.objects.all()
#   serializer_class = AccountXSerializer

# class AccountTypeListAPIView(ListAPIView):
#   queryset = AccountType.objects.all()
#   serializer_class = AccountTypeXSerializer

# class AccountCreateAPIView(CreateAPIView):
#   queryset = Account.objects.all()
#   serializer_class = AccountXSerializer

# class ClientDetailAPIView(RetrieveAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientAddSerializer

# class ClientUpdateAPIView(UpdateAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientAddSerializer

# class ClientDeleteAPIView(DestroyAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientAddSerializer

# class ClientAddAPIView(CreateAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientAddSerializer

# class ClientListAPIView(ListCreateAPIView):
#   queryset = Client.objects.all()
#   serializer_class = ClientSerializer






















