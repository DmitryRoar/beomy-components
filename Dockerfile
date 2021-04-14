FROM node:14 as builder

WORKDIR /app
RUN npm i -g @angular/cli 
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN ng build --prod

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/ /app/dist/