from crud import serialize
from crud.models import DetailsModel
from crud.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class DetailsTable(APIView):
    def get(self,request):
        details = DetailsModel.objects.all()
        serializer = DetailsSerializer(details, many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = DetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error_messages)

class DetailsUpdateTable(APIView):
    def post(self,request,id):
        try:
            details = DetailsModel.objects.get(id=id)
        except:
            return Response({"error": "Details not found"})
        

        serializer = DetailsSerializer(details, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error_messages)


class DetailsDeleteTable(APIView):
    def post(self,request,id):
        try:
            details = DetailsModel.objects.get(id=id)
        except:
            return Response({"error": "Details not found"})
        
        details.delete()
        return Response(200)

        
         
