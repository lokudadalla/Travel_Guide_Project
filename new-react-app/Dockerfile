# --- build stage ---
FROM node:20-alpine AS build
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install --legacy-peer-deps

# build
COPY . .
RUN npm run build \
  && if [ -d dist ]; then mv dist build; fi \
  && if [ -d out ]; then mv out build; fi

# --- serve stage ---
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
