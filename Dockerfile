FROM nginx

RUN mkdir /app
COPY dist/ /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5173

CMD ["/usr/sbin/nginx","-g","daemon off;"]