from django.contrib import admin
from .models import (
    PersonalInfo, ProfileSummary, CareerObjective,
    TechnicalSkill, Internship, Project,
    Education, Language
)

admin.site.register(PersonalInfo)
admin.site.register(ProfileSummary)
admin.site.register(CareerObjective)
admin.site.register(TechnicalSkill)
admin.site.register(Internship)
admin.site.register(Project)
admin.site.register(Education)
admin.site.register(Language)
