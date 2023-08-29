#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py createsuperuser --email Tolubori07@gmail.com  
python manage.py makemigrations 
python manage.py migrate