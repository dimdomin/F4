from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Dishes(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название блюда')
    recipe = models.TextField(verbose_name='Рецепт')
    image = models.TextField(verbose_name='Изображение')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

