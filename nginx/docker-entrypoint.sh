#!/usr/bin/env sh
set -eu

envsubst '${CLIENT_APP_INTERNAL_PORT} ${API_SERVER_INTERNAL_PORT}' </etc/nginx/conf.d/default.conf.template >/etc/nginx/conf.d/default.conf

exec "$@"
