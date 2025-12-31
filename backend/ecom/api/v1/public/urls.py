from django.urls import path
from .views import ProductView,ProductDetailView, CategoriesView

urlpatterns = [
    path('products/', ProductView.as_view(), name='product-operations'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail-operations'),
    path('categories/', CategoriesView.as_view(), name='categories'),
]
