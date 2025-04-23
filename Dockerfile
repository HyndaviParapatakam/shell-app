# Stage 1: Build the SSR app
FROM node:lts-slim AS builder
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps || (echo "❌ npm install failed" && cat /app/npm-debug.log || true && false)
RUN npm run build || (echo "❌ Build failed"; ls -al; [ -f build.log ] && cat build.log || echo "No build.log found"; false)

# Stage 2: Runtime image (used by app AND Helm hook)
FROM amazon/aws-cli:2.13.28 AS deploy
WORKDIR /app

# Copy built files into expected directory
COPY --from=builder /app /app

# Expose app port (adjust if not 4000)
EXPOSE 4000

# Start SSR server
CMD ["node", "dist/server.js"]

# Optional: Keep container alive if needed (noop for hook job)
CMD ["sleep", "10"]
