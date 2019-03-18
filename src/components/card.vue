<template lang="pug">
  v-card
    v-img.white--text(height="200px" :src="img")
      v-container(fill-height fluid)
        v-layout(fill-height)
          v-flex(xs12 align-end flexbox_)
            span.headline.font-weight-bold {{cardName}}
    v-card-title
      div
        slot(name="text")
    v-card-actions
      slot(name="action")
</template>

<script>
export default {
  name: 'Card',
  props: {
    img: {
      default: require('@/assets/AR.png')
    },
    cardName: {
      type: String,
      default: 'hogehoge'
    }
  }
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
