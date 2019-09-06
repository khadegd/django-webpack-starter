from django.conf import settings

def global_settings(request):
    return {
            'DEBUG': settings.DEBUG,
            'WEBPACK_LIVE_SERVER': settings.WEBPACK_LIVE_SERVER,
            }
