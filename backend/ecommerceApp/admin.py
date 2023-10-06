from django.contrib import admin
from .models import Product
# Register your models here.
class MemberAdmin(admin.ModelAdmin):
  list_display = ("name", "price", "discount",)
admin.site.register(Product,MemberAdmin)
