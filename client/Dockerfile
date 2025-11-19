# Stage 1: Build React App
FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# COPY default.conf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/sites-available/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/dist /var/www/html


RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
