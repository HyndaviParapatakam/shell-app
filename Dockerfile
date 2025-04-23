# Stage 1: Build the SSR app
FROM node:lts-slim AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build  # Ensure this outputs to /app/dist

# Stage 2: Runtime image (used by app AND Helm hook)
FROM amazon/aws-cli:2.13.28 AS deploy
WORKDIR /app
COPY --from=builder /app/dist /app/build
CMD ["sleep", "10"]
