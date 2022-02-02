# TODO-APP-SERVER
- 書籍「基礎から学ぶ REACT/REACT HOOKS」に出てくるモックサーバーを実装した
- SPA + API Serverの構成をAWSで試したかった
  - SPA -> CloudFront + S3
  - API Server -> API Gatway (VPC link) + ELB + ECS (Fargate)

## 実行方法
```
$ npm start
```

起動後、`http://localhost:3100/todos`にアクセスする。

その他のエンドポイントは`routes/todoRouter.js`を参照、または前述の書籍を参照のこと。
