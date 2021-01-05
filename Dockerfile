
# ENV PATH="/scripts:${PATH}"

# COPY ./requirements.txt /requirements.txt
# RUN apk add --update --no-cache --virtual .tmp gcc jpeg-dev zlib-dev python3-dev musl-dev postgresql-dev libc-dev linux-headers libffi-dev make
# RUN pip3 install -r /requirements.txt
# RUN apk del .tmp

# RUN mkdir /blogs_manager
# COPY . /blogs_manager
# WORKDIR /blogs_manager
# COPY ./scripts /scripts

# RUN chmod +x /scripts/*

# RUN mkdir -p /vol/web/media
# RUN mkdir -p /vol/web/static

# RUN adduser -D user
# RUN chown -R user:user /vol
# RUN chmod -R 755 /vol/web
# USER user

# CMD ["entrypoint.sh"]


FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/