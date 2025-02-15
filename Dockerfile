# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy built application
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"] 