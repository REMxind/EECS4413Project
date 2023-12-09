from django.db import models

# Create your models here.
from data_access.models import Product
from identity.models import Customer


class Order(models.Model):
    # basic info
    customer = models.ForeignKey(Customer, on_delete=models.DO_NOTHING)
    products = models.ManyToManyField(Product, through='OrderItem')
    total = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    date = models.DateField(db_index=True)
    status = models.CharField(max_length=255, default="processing")
    # address info
    first_name = models.CharField(max_length=255, default="")
    last_name = models.CharField(max_length=255, default="")
    phone_num = models.CharField(max_length=10, default="")
    address_1 = models.CharField(max_length=255, default="")
    address_2 = models.CharField(max_length=255, default="")
    city = models.CharField(max_length=255, default="")
    province = models.CharField(max_length=2, default="")
    postal_code = models.CharField(max_length=7, default="")
    # payment info
    payment_method = models.CharField(max_length=255, default="")

    def __str__(self):
        return str(self.id)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return 'product'
