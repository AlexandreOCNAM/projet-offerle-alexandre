FROM node:18 as builder
WORKDIR /app
ADD . /app
RUN npm i && npm run build

FROM caddy:2.6.4-alpine
EXPOSE 4200
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist/* /usr/share/caddy