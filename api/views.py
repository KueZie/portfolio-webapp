import json

from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from gql import gql

from api.graphql.client import git_client
import api.graphql.loader as loader


def status(request: HttpRequest):
    breakpoint()
    return HttpResponse(status=200)

def github_pinned_repos(request: HttpRequest):
    if request.method == 'GET':
        try:
            schema = loader.load('pinned_repositories_query.graphql')
            return HttpResponse(json.dumps(git_client.execute(schema)), content_type='application/json', status=200)
        except Exception as e:
            return HttpResponse(f'An error occurred while executing query. {e}', status=500)
    else:
        return HttpResponse('Only GET is supported.', status=405)
