FROM python:3.8
ENV PYTHONBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
CMD gunicorn -b "0.0.0.0:$PORT" --workers 3 portfolio.wsgi:application