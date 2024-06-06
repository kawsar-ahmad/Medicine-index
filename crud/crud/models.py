from django.db import models

class DetailsModel(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50)
    generic_name=models.CharField(max_length=50)
    manufacturer=models.CharField(max_length=100)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    description=models.TextField()
    batch_number=models.DecimalField(max_digits=50, decimal_places=0)

    def __str__(self):
        return self.name