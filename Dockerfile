FROM node:13.8 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:13.8
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]