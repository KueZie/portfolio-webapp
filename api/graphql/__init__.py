from . import loader
from django.conf import settings

loader.configure_search_directories(settings.GRAPHQL_SEARCH_DIRECTORIES)