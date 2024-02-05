var animation = bodymovin.loadAnimation({
    container: document.getElementById('loading-indicator'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../anim/waving.json' // lottie file path
  })