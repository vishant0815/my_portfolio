from django.db import models

class PersonalInfo(models.Model):
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    address = models.TextField()
    github = models.URLField()

    def __str__(self):
        return self.full_name

class ProfileSummary(models.Model):
    summary = models.TextField()

class CareerObjective(models.Model):
    objective = models.TextField()

class TechnicalSkill(models.Model):
    category = models.CharField(max_length=100)  # e.g., Languages, Frameworks
    skills = models.TextField()  # e.g., Python, JavaScript, C++

    def __str__(self):
        return self.category

class Internship(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50)
    details = models.TextField()

    def __str__(self):
        return f"{self.title} at {self.company}"

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    github_link = models.URLField(blank=True)
    frontend_link = models.URLField(blank=True)
    backend_link = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Education(models.Model):
    degree = models.CharField(max_length=100)
    institution = models.CharField(max_length=200)
    duration = models.CharField(max_length=50)
    score = models.CharField(max_length=20)
    
    def __str__(self):
        return f"{self.degree} from {self.institution}"

class Language(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
