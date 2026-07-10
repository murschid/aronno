# ── Stage 1: Build the Nuxt application ──
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Production runtime ──
FROM node:24-alpine AS runner

WORKDIR /app

# Run as non-root user for security best practices
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nuxtuser

# Copy only build output
COPY --from=builder /app/.output /app/.output

ENV PORT=3000 \
    HOST=0.0.0.0 \
    NODE_ENV=production

EXPOSE 3000

USER nuxtuser

CMD ["node", ".output/server/index.mjs"]
