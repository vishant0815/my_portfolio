from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver
import os

@receiver(post_migrate)
def create_default_superuser(sender, **kwargs):
    User = get_user_model()
    username = os.environ.get("DJANGO_SUPERUSER_USERNAME", "chahu")
    email = os.environ.get("DJANGO_SUPERUSER_EMAIL", "chahatvishant1508@gmail.com")
    password = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "Ch@h@t_1508")

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username=username, email=email, password=password)
        print("✅ Default superuser created.")
