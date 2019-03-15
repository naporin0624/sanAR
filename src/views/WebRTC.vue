<template lang="pug">
  v-container(text-xs-center)
    video#video.video(ref="video" width="700" height="500" autoplay playsinline="true")
    canvas#overlay.overlay(ref="canvas")
    v-container(text-xs-center).slider
      p.headline 位置調整バー
      v-slider(v-model="xPosition", :min="0", :max="xMax", label="x軸" thumb-label)
      v-slider(v-model="yPosition", :min="0", :max="yMax", label="y軸" thumb-label)
      v-slider(v-model="imageSize", :min="100", :max="1000", label="大きさ" thumb-label)
</template>

<script>
export default {
  name: 'WebRTC',
  data () {
    return {
      xPosition: 0,
      xMax: 300,
      yPosition: 0,
      yMax: 300,
      imageSize: 200,
      context: null,
      natoriImage: new Image(),
      constraints: {
        audio: false,
        video: {
          facingMode: 'environment'
        }
      }
    }
  },
  mounted () {
    this.natoriImage.src = require('@/assets/natori.png')
    this.context = this.$refs.canvas.getContext('2d')
    this.isAvailableDevice()
    this.$refs.video.onresize = () => {
      this.adjustVideo()
    }
    this.adjustVideo()
    this.drawLoop()
  },
  methods: {
    isAvailableDevice () {
      if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia(this.constraints).then(this.successFunc).catch((err) => {
          alert('不明なエラー')
          console.log(err)
        })
      } else {
        alert('非対応ブラウザです')
      }
    },
    successFunc (stream) {
      if ('srcObject' in this.$refs.video) {
        this.$refs.video.srcObject = stream
      } else {
        window.URL = window.URL || window.webkitURL
        this.$refs.video.src = window.URL && window.URL.createObjectURL(stream)
      }
    },
    adjustVideo () {
      const ratio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
      this.$refs.video.width = Math.round(this.$refs.video.height * ratio)
      this.$refs.canvas.width = this.$refs.video.width
      this.$refs.canvas.height = this.$refs.video.height
    },
    drawLoop () {
      this.context.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      this.context.drawImage(this.$refs.video, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      // const imageData = this.context.getImageData(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      const width = this.imageSize
      const height = width * Math.round(2527 / 1051)
      this.xMax = this.$refs.canvas.width - width
      this.yMax = this.$refs.canvas.height - height
      this.context.drawImage(this.natoriImage, this.xPosition, this.yMax - this.yPosition, width, height)
      requestAnimationFrame(this.drawLoop)
    }
  }
}
</script>

<style scoped>
video{
  display: none;
}
.slider {
  width: 50%;
}
</style>
