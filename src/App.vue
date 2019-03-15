<template lang="pug">
  v-app(class='pink lighten-5')
    v-toolbar(app color="#FF4081")
      v-toolbar-title.headline.text-uppercase
        span 名取とお出かけ
        span.font-weight-light 〜AR編〜
    v-content
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>
