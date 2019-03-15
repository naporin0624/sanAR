const path = require('path')
// expressの呼び込み
const express = require('express')
// PORTの設定
// もしenvにportが確立したらそのポートを、していなかったら8080を使う
const port = process.env.PORT || 5001
// express()のインスタンス
const app = express()

// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
const distPath = path.join(__dirname, '/dist/')
app.use(express.static(distPath))

// SPAの時、ルーティングがうまくいかない時があるので以下の設定
// これをしていないと、https://~~~/aboutとかに行った時にリロードするとエラーがでる
// SPAだとaboutファイルを直で読み込んでいないから
// これでルート以外でリロードしてもindex.htmlを読み込んでちゃんとルーティングをしてくれる
// /.*/で全てのルートを指定。req(request), res(response)
app.get(/.*/, (req, res) => {
  res.sendfile(path.join(__dirname, '/dist/index.html'))
})

// 一番上で指定したportをlisten
app.listen(port)

// 動いてるかどうかconsoleで見る
console.log('Server is up!!')
