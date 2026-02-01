from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm

def user_login(request):
    user_login_form = AuthenticationForm()
    return render(request,'user/user_login.html',{'login_form':user_login_form})

# Create your views here.
