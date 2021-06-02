FROM osgeo/gdal:ubuntu-small-latest

ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y netcat && \
    apt-get install -y gettext && \
    apt-get install -y python3-pip && \
    apt-get install -y python3-psycopg2 && \
    apt-get clean

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/