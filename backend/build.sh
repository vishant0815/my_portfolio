#!/bin/bash

# Install all dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate