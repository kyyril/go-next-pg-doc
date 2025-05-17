# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Set standalone output
ENV NEXT_OUTPUT_STANDALONE=true
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=http://localhost:8080/api

EXPOSE 3000

# Use standalone server
CMD ["node", "server.js"]