from rest_framework import serializers
from .models import *

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'

class ProfileSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileSummary
        fields = '__all__'

class CareerObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerObjective
        fields = '__all__'

class TechnicalSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalSkill
        fields = '__all__'

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'
