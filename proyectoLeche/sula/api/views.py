# from banco.models import Client, Account, AccountType
# from .serializers import (
#   ClientSerializer,
#   ClientAddSerializer,
#   AccountXSerializer,
#   AccountTypeXSerializer,
#   AccountSerializer
# )
# from rest_framework.generics import (
#   ListAPIView,
#   CreateAPIView,
#   DestroyAPIView,
#   UpdateAPIView,
#   ListCreateAPIView,
#   RetrieveAPIView,
# )
# from rest_framework import status, permissions
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






















