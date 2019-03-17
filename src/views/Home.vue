<template lang="pug">
  div.wrapper
    v-container(grid-list-md text-xs-center)
      v-layout(row wrap)
        v-flex(md4 xs12)
          Card(
            :img="require('@/assets/AR.png')"
            cardName="名取と２ショットARだよ！"
          )
            template(v-slot:text)
              span.title ARで名取を現実世界に召喚！
              br
              span スマホでつかってね！
              br
              span WebARの方はマーカーが必要だよ！
            template(v-slot:action)
              v-btn(flat, color="purple" to="/AR") Let's Go!! iOS
              v-btn(flat, color="blue" to="/WebAR") Let's Go!! WebAR
        v-flex(md4 xs12)
          Card(
            img="https://pbs.twimg.com/profile_banners/968546584337072128/1540878933/1500x500"
            cardName="名取さな様"
          )
            template(v-slot:text)
              span.title １周年おめでとうございます！
              br
              span 勝手に作っちゃってごめんなさい
              br
              span いつも楽しく配信見させていただいています！ありがとうございます！
            template(v-slot:action)
              v-btn(flat color="#42A5F5" href="https://twitter.com/sana_natori") Twitter
              v-btn(flat color="red" href="https://www.youtube.com/channel/UCIdEIHpS0TdkqRkHL5OkLtA") YouTube
        v-flex(md4 xs12)
          Card(
            img="https://pbs.twimg.com/profile_banners/1060006096469803008/1550302027/1500x500"
            cardName="製作者"
          )
            template(v-slot:text)
              span.title naporitan🍆
              br
              span なにかを作っているオタク
            template(v-slot:action)
              v-btn(flat color="#42A5F5" href="https://twitter.com/naporin24690") Twitter
              v-btn(flat color="black" href="https://github.com/naporin0624/sanAR") GitHub
              v-btn(flat color="green" href="https://naporitan.hatenablog.com/") blog

</template>

<script>
import Card from '@/components/card'
export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style scoped>
/* .v-card {
  margin: 8px;
}
.headline.first {
  color: #FF4081;
}
.headline {
  color: black;
  background-color: white;
  border-radius: 8px;
} */
</style>
