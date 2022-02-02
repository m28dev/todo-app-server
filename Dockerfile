FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

# Webアプリケーションの待ち受けポート
ENV PORT=3000

EXPOSE 3000
CMD [ "node", "app.mjs" ]
