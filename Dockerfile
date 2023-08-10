FROM nginx:latest

# COPY nginx_mcc.conf /etc/nginx/conf.d/mcc.conf
# RUN rm -f /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

# CMD chmod -R 774 /usr/share/nginx/html
