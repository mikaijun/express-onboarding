# このリポジトリに関して
下記記事のサンプルリポジトリになります

https://qiita.com/miumi/items/8ad11012c2622e6536af

# Docker環境構築
## .envに適当な値を設定
```
MYSQL_DATABASE=express_db
MYSQL_USERE=user
MYSQL_PASSWORD=password
MYSQL_ROOT_PASSWORD=password
DATABASE_URL=mysql://root:password@localhost:3306/express_db
```
## Dockerコンテナ起動
docker-compose up -d

# node環境構築
## プロジェクトの依存関係をインストール

```bash
npm install
```

## マイグレーション実行

```bash
npx prisma migrate dev
```

## サーバーを立ち上げる

```bash
npm run dev
```
