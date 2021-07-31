from django.http import HttpResponse
from django.template import loader
from django.conf import settings

from portfolio.utils import conditional_never_cache


@conditional_never_cache(condition=settings.DEBUG)
def index(request):
    template = loader.get_template('index.html')
    context = {
        'Title': "Hunter Goram | Developer | Computer Engineer",
        'GithubURL': "https://www.github.com/KueZie",
        'TwitterURL': "https://twitter.com/goram_hunter",
        'LinkedinURL': "https://www.linkedin.com/in/hunter-goram-96355a168?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXZjFM%2BNjTSyJM6UVEpMmew%3D%3D"
    }
    return HttpResponse(template.render(context, request))
