FROM node:16 AS build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci --only=production

ENV CI=true
RUN npm test

ENV SKIP_PREFLIGHT_CHECK=true
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api/

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html