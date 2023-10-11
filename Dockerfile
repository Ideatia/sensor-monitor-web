FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=base /app/deploy/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
