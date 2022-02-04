# TODO-APP-SERVER
書籍「基礎から学ぶ REACT/REACT HOOKS」に出てくるモックサーバーを実際に実装した。

## 実行方法
```
$ npm start
```

起動後、`http://localhost:3100/todos`にアクセスする。
その他のエンドポイントは`routes/todoRouter.js`を参照、または前述の書籍を参照のこと。

### Dockerコンテナで実行する場合
```
$ docker image build . -t m28dev/todo-app-server
$ docker container run -d -p 3100:3000 m28dev/todo-app-server
```
