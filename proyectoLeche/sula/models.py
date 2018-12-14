from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

# class Sexo(models.Model):
#     sexo =  models.CharField(max_length=9)

#     def __str__(self):
#         return self.sexo

class Cliente(models.Model):
  nombre = models.CharField(max_length=25)
  apellido = models.CharField(max_length=25)
#   sexo = models.ForeignKey(Sexo)
#   es_productor = models.BooleanField(default=True)

  def __str__(self):
    return '{} {}'.format(self.nombre, self.apellido)


class Productor(models.Model):
  nombre = models.CharField(max_length=25)
  apellido = models.CharField(max_length=25)
#   sexo = models.ForeignKey(Sexo)

  def __str__(self):
    return '{} {}'.format(self.nombre, self.apellido)

class TotalLeche(models.Model):
    totalLeche = models.DecimalField( max_digits=5, decimal_places=1)
    def __str__(self):
        return '{}>{}'.format(self.id,self.totalLeche)



class NotaEntrega(models.Model):
    productor = models.ForeignKey(Productor, related_name='notaEntregas', on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=10, decimal_places=1)
    precio = models.DecimalField(max_digits=10, decimal_places=1)

    # totalLeche = models.ForeignKey(TotalLeche, on_delete=models.CASCADE,default=1)

    # def getTotalLeche(self):
    #     return self.totalLeche.totalLeche + self.cantidad

    def getTotal(self):
        return self.precio * self.cantidad
    total = property(getTotal)
    def __str__(self):
        return '{} > {}'.format(self.productor,self.total)

class Factura(models.Model):
    cliente = models.ForeignKey(Cliente, related_name='facturas', on_delete=models.CASCADE)
    cantidad = models.DecimalField(max_digits=10, decimal_places=1)
    precio = models.DecimalField(max_digits=10, decimal_places=1)
    
    def getTotal(self):
        return self.precio * self.cantidad
    total = property(getTotal)
    def __str__(self):
        return '{} > {}'.format(self.cliente,self.total)

# class Factura(models.Model):
        



