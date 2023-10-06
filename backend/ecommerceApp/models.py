from django.db import models
from django.core.validators import MinValueValidator ,MaxValueValidator
# Create your models here.
class Product(models.Model):
    name=models.CharField(max_length=100)
    price= models.DecimalField(max_digits=10, decimal_places=2,default=1,validators=[MinValueValidator(1)])
    discount=models.DecimalField(max_digits=3, decimal_places=2,default=0,validators=[MinValueValidator(0),MaxValueValidator(100)])
    description=models.TextField()
    category=models.CharField(max_length=100)
    product_Main_Img_URL = models.TextField()
    def __str__(self) -> str:
        return self.name
