from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from api.serializers import MyTokenObtainPairSerializer, RegisterSerializer, UserSerialzer,SearchUserSerialzer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib import admin
from rest_framework import viewsets
from rest_framework import filters
    
# Create your views here.

class SearchUserView(generics.ListCreateAPIView):
    search_fields = ['username', 'first_name', 'last_name']
    filter_backends = (filters.SearchFilter,)
    queryset = User.objects.filter(is_superuser=0)
    serializer_class = SearchUserSerialzer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/admin_side'
    ]
    return Response(routes)

# @permission_classes([IsAuthenticated])
class CRUDByAdmin(viewsets.ModelViewSet):
    serializer_class = UserSerialzer
    queryset = User.objects.filter(is_superuser=0)
