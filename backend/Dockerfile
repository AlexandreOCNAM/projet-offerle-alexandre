# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .
ENV DATABASE_URL="postgres://offerlea:vjAB9DkH9YHWbSIiW4YZZTC2kNL9fsaO@dpg-cm23krun7f5s73ergoi0-a.frankfurt-postgres.render.com/si_web_aofferle"

RUN npx prisma generate
RUN npx prisma db pull
# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/src/main.js" ]
