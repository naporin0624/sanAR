<template lang="pug">
  div.wrapper
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap)
        v-flex(md4 xs12)
          v-card
            v-img.white--text(height="200px" :src="require('../assets/AR.png')")
              v-container(fill-height, fluid)
                v-layout(fill-height)
                  v-flex(xs12 align-end flexbox_)
                    span.headline.first.font-weight-bold 名取と２ショット！ARだよ！
            v-card-title
              div
                span.title ARで名取を現実世界に召喚できるぞ！
                br
                span スマホでつかってね！
                br
                span IOSの方はリンクに飛んで右上のアイコンをタップしたら使えるよ！
                br
                span Android使えるかわからん・・・・・
            v-card-actions
              v-btn(flat, color="blue" href="/IOS") IOS
              v-btn(flat, color="red" disabled) Android
        v-flex(md4 xs12)
          v-card
            v-img.white--text(height="200px", src="https://pbs.twimg.com/profile_banners/968546584337072128/1540878933/1500x500")
              v-container(fill-height, fluid)
                v-layout(fill-height)
                  v-flex(xs12 align-end flexbox_)
                    span.headline.font-weight-bold 名取さな様
            v-card-title
              div
                span.title １周年おめでとうございます！
                br
                span 勝手に作っちゃってごめんなさい
                br
                span いつも楽しく配信見させていただいています！ありがとうございます！
            v-card-actions
              v-btn(flat color="#42A5F5" href="https://twitter.com/sana_natori") Twitter
              v-btn(flat color="red" href="https://www.youtube.com/channel/UCIdEIHpS0TdkqRkHL5OkLtA") YouTube
        v-flex(md4 xs12)
          v-card
            v-img.white--text(height="200px", src="https://pbs.twimg.com/profile_banners/1060006096469803008/1550302027/1500x500")
              v-container(fill-height, fluid)
                v-layout(fill-height)
                  v-flex(xs12 align-end flexbox_)
                    span.headline.font-weight-bold 製作者
            v-card-title
              div
                span.title naporitan🍆
                br
                span なにかを作っているオタク
            v-card-actions
              v-btn(flat color="#42A5F5" href="https://twitter.com/naporin24690") Twitter
              v-btn(flat color="black" href="https://naporitan.hatenablog.com/") blog
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.v-card {
  margin: 8px;
}
.headline.first {
  color: #FF4081;
}
.headline {
  color: black;
  background-color: white;
  border-radius: 8px;
}
</style>
