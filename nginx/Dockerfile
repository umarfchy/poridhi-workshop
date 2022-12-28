FROM nginx:stable-alpine
COPY ./conf/nginx.conf.template /nginx.conf.template
# ENV CLIENT_APP_INTERNAL_PORT 'localhost'
# ENV API_SERVER_INTERNAL_PORT 'localhost'

CMD ["/bin/sh" , "-c" , "envsubst < /nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]
