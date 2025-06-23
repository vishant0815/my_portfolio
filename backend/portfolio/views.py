from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class PersonalInfoView(APIView):
    def get(self, request):
        data = PersonalInfo.objects.first()
        serializer = PersonalInfoSerializer(data)
        return Response(serializer.data)

class ProfileSummaryView(APIView):
    def get(self, request):
        data = ProfileSummary.objects.first()
        serializer = ProfileSummarySerializer(data)
        return Response(serializer.data)

class CareerObjectiveView(APIView):
    def get(self, request):
        data = CareerObjective.objects.first()
        serializer = CareerObjectiveSerializer(data)
        return Response(serializer.data)

class TechnicalSkillsView(APIView):
    def get(self, request):
        data = TechnicalSkill.objects.all()
        serializer = TechnicalSkillSerializer(data, many=True)
        return Response(serializer.data)

class InternshipsView(APIView):
    def get(self, request):
        data = Internship.objects.all()
        serializer = InternshipSerializer(data, many=True)
        return Response(serializer.data)

class ProjectsView(APIView):
    def get(self, request):
        data = Project.objects.all()
        serializer = ProjectSerializer(data, many=True)
        return Response(serializer.data)

class EducationView(APIView):
    def get(self, request):
        data = Education.objects.all()
        serializer = EducationSerializer(data, many=True)
        return Response(serializer.data)

class LanguagesView(APIView):
    def get(self, request):
        data = Language.objects.all()
        serializer = LanguageSerializer(data, many=True)
        return Response(serializer.data)
