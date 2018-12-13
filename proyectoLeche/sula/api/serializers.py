from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from sula.models import Cliente,Productor,Factura,NotaEntrega,TotalLeche

class ClienteSerializer(ModelSerializer):
  class Meta:
    model = Cliente
    fields = ['id', 'nombre', 'apellido']

class ProductorSerializer(ModelSerializer):
  class Meta:
    model = Productor
    fields = ['id', 'nombre', 'apellido']

class NotaEntregaSerializer(ModelSerializer):
#   account_type = serializers.SlugRelatedField(read_only=True, slug_field='description')

  class Meta:
    model = NotaEntrega
    fields = ['id', 'productor', 'cantidad', 'precio', 'total']



# class AccountTypeSerializer(ModelSerializer):
#   class Meta:
#     model = AccountType
#     fields = ['description']

# class AccountXSerializer(ModelSerializer):
#   class Meta:
#     model = Account
#     fields = '__all__'

# class AccountTypeXSerializer(ModelSerializer):
#   class Meta:
#     model = AccountType
#     fields = '__all__'

# class AccountSerializer(ModelSerializer):
#   account_type = serializers.SlugRelatedField(read_only=True, slug_field='description')

#   class Meta:
#     model = Account
#     fields = ['id', 'created_at', 'balance', 'account_type', 'is_active']

# class ClientSerializer(ModelSerializer):
#   accounts = AccountSerializer(many = True, read_only = True)

#   class Meta:
#     model = Client
#     fields = ['id', 'first_name', 'last_name', 'email', 'accounts']

# class ClientAddSerializer(ModelSerializer):
#   accounts = AccountSerializer(many = True, read_only = True)
#   class Meta:
#     model = Client
#     fields = ['id', 'first_name', 'last_name', 'email', 'photo', 'accounts']



















