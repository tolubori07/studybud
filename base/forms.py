from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from .models import Room, User


class Myusercreationform(UserCreationForm):
    class Meta:
        model = User
        fields = ['name','username','email','password1','password2']

class RoomForm(ModelForm):
    class Meta:
        model = Room
        fields = '__all__'
        exclude = ['host', 'participants']

class userform(ModelForm):
    class Meta:
       model = User
       fields = ['name','username', 'email','avatar','bio']
    