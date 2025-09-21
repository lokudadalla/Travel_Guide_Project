# --- build stage ---
FROM node:20.12.2-alpine AS build
WORKDIR /app

# Refresh package index & security patches (build stage)
RUN apk update && apk upgrade --no-cache

COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

# --- runtime stage ---
FROM node:20.12.2-alpine
WORKDIR /app

# Apply security patches in runtime image too
RUN apk update && apk upgrade --no-cache

ENV NODE_ENV=production
# Run as non-root (reduces risk even if a CVE remains)
USER node

COPY --chown=node:node --from=build /app ./
EXPOSE 8080
CMD ["node", "app.js"]
