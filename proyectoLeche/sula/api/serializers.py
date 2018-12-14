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

class FacturaSerializer(ModelSerializer):
    clienteInfo = ClienteSerializer(many=False,read_only= True,source='cliente')
    class Meta:
        model = Factura
        fields = ['id', 'cliente', 'cantidad', 'precio', 'total','clienteInfo']

class NotaEntregaSerializer(ModelSerializer):
  productorInfo=ProductorSerializer(many=False,read_only= True,source='productor')
  class Meta:
    model = NotaEntrega
    fields = ['id', 'productor', 'cantidad', 'precio', 'total','productorInfo']

class TotalLecheSerializer(ModelSerializer):
    class Meta:
        model = TotalLeche
        fields = ['id','totalLeche']














