# Stage 1: Build the SSR app
FROM node:lts-slim AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build  # Ensure this outputs to /app/dist

# Stage 2: Runtime image (used by app AND Helm hook)
FROM amazon/aws-cli:2.13.28 AS deploy
WORKDIR /app

# Copy built files into expected directory
COPY --from=builder /app/build /app/build

# Optional: Keep container alive if needed (noop for hook job)
CMD ["sleep", "10"]
