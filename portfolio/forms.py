from django import forms

class ContactForm(forms.Form):
    email = forms.EmailField()
    first_name = forms.CharField(min_length=2, max_length=30)
    last_name = forms.CharField(min_length=2, max_length=30)
    message = forms.CharField(widget=forms.Textarea, max_length=1000)