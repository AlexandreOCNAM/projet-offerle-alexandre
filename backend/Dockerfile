# Base image
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npx prisma db push --force-reset
RUN npx prisma db seed


# Creates a "dist" folder with the production build
RUN npm run build
FROM node:18-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npx prisma db push --force-reset
RUN npx prisma db seed

EXPOSE 8000
CMD [ "npm", "run", "start:prod" ]
