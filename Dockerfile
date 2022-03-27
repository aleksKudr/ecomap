FROM --platform=linux/amd64  node:12.22.11-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build
## this is stage two , where the app actually runs
FROM --platform=linux/amd64  node:12.22.11-alpine
WORKDIR /usr
COPY package.json ./
COPY views ./views
COPY public ./public
RUN npm install --only=production
COPY --from=0 /usr/dist ./src
RUN npm install pm2 -g
EXPOSE 80
CMD ["pm2-runtime","src/app.js"]