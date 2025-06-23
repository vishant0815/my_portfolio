from django.urls import path
from .views import *

urlpatterns = [
    path('personal/', PersonalInfoView.as_view()),
    path('summary/', ProfileSummaryView.as_view()),
    path('objective/', CareerObjectiveView.as_view()),
    path('skills/', TechnicalSkillsView.as_view()),
    path('internships/', InternshipsView.as_view()),
    path('projects/', ProjectsView.as_view()),
    path('education/', EducationView.as_view()),
    path('languages/', LanguagesView.as_view()),
]
