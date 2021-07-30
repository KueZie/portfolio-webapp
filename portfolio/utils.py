from django.views.decorators.cache import never_cache


def conditional_never_cache(condition=False):
    def wrapper(func):
        if condition:
            return never_cache(func)
        return func

    return wrapper
