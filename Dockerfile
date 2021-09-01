FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html
COPY conf /etc/nginx/conf.d