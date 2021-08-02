from gql import Client
from gql.transport.requests import RequestsHTTPTransport
from django.conf import settings

git_transport = RequestsHTTPTransport(

    url='https://api.github.com/graphql',
    headers={
        'Authorization': f'bearer {settings.GITHUB_API_TOKEN}',
    },
    use_json=True
)

git_client = Client(
    transport=git_transport
)