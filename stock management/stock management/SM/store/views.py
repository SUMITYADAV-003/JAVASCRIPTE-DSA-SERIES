from django.shortcuts import render,redirect
from django.contrib import messages 
from .forms import CategoryForm

# Create your views here.
def categories(request):
    return render(request, 'store/categories.html')


def category_create(request):
    if request.method=='POST':
        cat_ceate_fm = CategoryForm(request.POST)
        if cat_ceate_fm.is_valid():
            new_categor = cat_ceate_fm.save()
            messages.success(request,'Category " '+ str(new_categor) +' " created successfully' )
            return redirect('CategoryCreate')
    else:
        cat_ceate_fm = CategoryForm()
    return render(request, 'store/category_create.html',{'category_form':cat_ceate_fm})
