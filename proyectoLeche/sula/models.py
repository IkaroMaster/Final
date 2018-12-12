from __future__ import unicode_literals

from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

class Sexo(models.Model):
    sexo =  models.CharField(max_length=9)

    def __str__(self):
        return self.sexo

class Cliente(models.Model):
  nombre = models.CharField(max_length=25)
  apellido = models.CharField(max_length=25)
  sexo = models.ForeignKey(Sexo)
  es_productor = models.BooleanField(default=True)

  def __str__(self):
    return '{} {}'.format(self.nombre, self.apellido)


class NotaEntrega(models.Model):
    cliente = models.ForeignKey(Cliente, related_name='notaEntregas', on_delete=models.CASCADE)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField()

    def __str__(self):
    return '{}'.format(self.cliente)

    def total(self):
        return self.precio * self.cantidad