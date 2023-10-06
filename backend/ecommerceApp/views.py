from django.shortcuts import render
from .models import Product
from django.http import JsonResponse
from django.core.serializers import serialize 
from django.http import HttpResponse
# Create your views here.
def displayHome(request):
    return render(request,'home.html')
def getProducts(request):
    products=Product.objects.all()
    data = serialize("json", products)
    return HttpResponse(data, content_type="application/json")
def getProduct(request,id):
    product=Product.objects.filter(id=id)
    print(product)
    data = serialize("json",product)
    return HttpResponse(data, content_type="application/json")