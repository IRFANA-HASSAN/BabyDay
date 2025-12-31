from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from public.models import Product
from .serializers import ProductSerializer


class CategoriesView(APIView):
    """
    Get all unique categories from products
    """
    def get(self, request):
        # Get unique age categories with their display names
        age_categories = []
        for value, label in Product.AGE_CATEGORY_CHOICES:
            if Product.objects.filter(age_category=value, is_available=True).exists():
                age_categories.append({
                    'value': value,
                    'label': label,
                    'count': Product.objects.filter(age_category=value, is_available=True).count()
                })
        
        # Get unique product categories
        product_categories = []
        for value, label in Product.PRODUCT_CATEGORY_CHOICES:
            if Product.objects.filter(product_category=value, is_available=True).exists():
                product_categories.append({
                    'value': value,
                    'label': label,
                    'count': Product.objects.filter(product_category=value, is_available=True).count()
                })
        
        return Response({
            'age_categories': age_categories,
            'product_categories': product_categories
        })
    
    
class ProductView(APIView):

    def get(self, request):
        products = Product.objects.filter(is_available=True)
        serializer = ProductSerializer(products, many=True, context={"request": request})
        return Response(serializer.data)



class ProductDetailView(APIView):

    def get_object(self, slug):
        return get_object_or_404(
            Product,
            title__iexact=slug.replace("-", " ")
        )

    def get(self, request, slug):
        product = self.get_object(slug)
        serializer = ProductSerializer(product, context={"request": request})
        return Response(serializer.data)
