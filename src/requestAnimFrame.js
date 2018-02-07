const requestAnimFrame = (function() {
  return window.requestAnimationFrame       ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame    ||
         window.oRequestAnimationFrame      ||
         window.msReqeustAnimationFrame     ||
         function (callback) {
            window.setTimeout(callback, 1000 / 60)
         }
})()

export default requestAnimFrame
