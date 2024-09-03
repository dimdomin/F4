from rest_framework import viewsets

from .models import Dishes, Category
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view


class CategoryApiView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DishesApiView(viewsets.ModelViewSet):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer


@api_view(['GET'])
def dishes_view(request):
    if request.method == 'GET':
        dishes = Dishes.objects.filter(category=request.query_params['category'])
        serializer = DishesSerializer(dishes, many=True)
        return Response(serializer.data)
