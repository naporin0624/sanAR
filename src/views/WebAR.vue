<template lang="pug">
  div.wrapper
    v-container(grid-list-md text-xs-center)
        v-layout(row wrap)
          v-flex(md6 xs12)
            Card(
              cardName="マーカー"
              :img="require('@/assets/maker.png')"
            )
              template(v-slot:text)
                span.title ARマーカーだよ！
                br
                span この画像にカメラをかざしてね！
              template(v-slot:action)
                v-btn(
                  flat
                  color="black"
                  href="/maker.png"
                ) マーカー表示
          v-flex(md6 xs12)
            Card(
              cardName="AR名取カメラ"
            )
              template(v-slot:text)
                span.title ARカメラだよ！
                br
                span マーカにカメラをかざすと小さい名取が出てくるぞ！
                br
                span 下のボタンを押してARカメラサイトに飛んでね！
                br
                span iOSのような体験ができず、すみません。もう少し頑張ります。

              template(v-slot:action)
                v-btn(
                  flat
                  color="red"
                  href="ARjs.html"
                ) ARカメラサイトに行く
        v-btn(to="/") ホームに戻る
</template>

<script>
import Card from '@/components/card'
export default {
  name: 'ARjs',
  components: {
    Card
  }
}
</script>

<style scoped>
iframe{
  width: 600px;
  height: 300px;
}
</style>
