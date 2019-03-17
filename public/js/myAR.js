let image = document.querySelector('#snap')
let takePhotoBtn = document.querySelector('#take-photo')
let deletePhotoBtn = document.querySelector('#delete-photo')
let downloadPhotoBtn = document.querySelector('#download-photo')
//  スナップショットボタン

takePhotoBtn.addEventListener('click', function (e) {
  e.preventDefault()
  let video = document.querySelector('video')
  let snap = takeSnapshot(video)

  // スナップショット表示.
  image.setAttribute('src', snap)
  image.classList.add('visible')

  //  削除ボタンと保存ボタン有効
  deletePhotoBtn.classList.remove('disabled')
  downloadPhotoBtn.classList.remove('disabled')

  //  保存ボタンにスナップショットを渡す
  downloadPhotoBtn.href = snap
})

// 削除ボタン
deletePhotoBtn.addEventListener('click', function (e) {

  e.preventDefault()

  //  スナップショットを隠す
  image.setAttribute('src', '')
  image.classList.remove('visible')

  //  削除ボタンと保存ボタン無効
  deletePhotoBtn.classList.add('disabled')
  downloadPhotoBtn.classList.add('disabled')

})

// スナップショットを撮る
function takeSnapshot (video) {
  let resizedCanvas = document.createElement('canvas')
  let resizedContext = resizedCanvas.getContext('2d')
  let width = video.videoWidth
  let height = video.videoHeight
  let aScene = document.querySelector('a-scene').components.screenshot.getCanvas('perspective')

  if (width && height) {
    // videoのサイズをキャンバスにセット
    resizedCanvas.width = width
    resizedCanvas.height = height
    // キャンバスにvideoをコピー
    resizedContext.drawImage(video, 0, 0, width, height)

    // カメラの画角でar側の縮小処理を変える
    if (width > height) {
      //  横長（PC)
      resizedContext.drawImage(aScene, 0, 0, width, height)
    } else {
      //  縦長（スマホ）
      let scale = height / width
      let scaledWidth = height * scale
      let marginLeft = (width - scaledWidth) / 2
      resizedContext.drawImage(aScene, marginLeft, 0, scaledWidth, height)
    }
    return resizedCanvas.toDataURL('image/png')
  }
}