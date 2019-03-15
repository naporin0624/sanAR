
<template lang="pug">
  div.wrapper
    v-container(text-xs-center)
      p.title 右上のアイコンをクリックしてね！
      iframe(width='75%', height='300px' frameborder='0', src='https://www.vectary.com/usdz/embed/1f403ca8-0b5f-41a6-b859-7f9b525a9518')
      v-btn(href="/") 戻る
</template>

<script>
export default {
  name: 'AR'
}
</script>
