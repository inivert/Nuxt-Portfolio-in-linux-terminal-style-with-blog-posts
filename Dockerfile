FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only package.json first
COPY package.json ./

# Install dependencies without lockfile
RUN pnpm install --no-frozen-lockfile

# Copy application files
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start command
CMD ["node", ".output/server/index.mjs"] 