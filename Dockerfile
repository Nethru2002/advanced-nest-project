# Stage 1: Build the application
# FIX: Using Node.js v20 LTS
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Create the production image
# FIX: Using Node.js v20 LTS
FROM node:20-alpine

# Set timezone
RUN apk add --no-cache tzdata
ENV TZ=UTC

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built artifacts from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]