# Django Webpack Starter

Hello fellow human. The repo uses
```
Python 3.7.*
Django 2.2.*
Webpack 4.39.*
Bootstrap 4.3.*
Pipenv
```
If you have any questions tweet me [@khadegd](https://twitter.com/khadegd).

## Installing

Run the following commands.

```
git clone git@github.com:khadegd/django-webpack-starter.git demo
python3 -m venv .venv
source .venv/bin/activate
pip install pipenv
pipenv install
yarn
```


### Hot reload:
```
Update setting.py -> WEBPACK_LIVE_SERVER = True
yarn start
python manage.py runserver_plus 0.0.0.0:8000
```


### One off development build:
```
yarn run build-dev
python manage.py runserver_plus 0.0.0.0:8000
```


### Production mode:

```
DEBUG = True
yarn run build-prod
python manage.py runserver_plus 0.0.0.0:8000 --insecure
```

## Thanks

* Colt Steele - [Webpack Course YouTube](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)
* Chi Shang Cheng - [Integrating webpack-dev-server with Django](https://cscheng.info/2016/08/03/integrating-webpack-dev-server-with-django.html)


## Authors

* **Ganesh Khade** - Twitter - [@khadegd](https://twitter.com/khadegd)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


