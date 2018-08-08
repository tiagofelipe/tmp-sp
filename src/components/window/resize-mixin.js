import {width, height, offset, getWindowScreenSize} from '../../utils/dom.js'
import {stopAndPrevent} from '../../utils/event.js'

let resizePosition
let pos1, pos2, pos3, pos4 = 0

export default {
  props: {
    resize: {
      type: Boolean,
      default: true
    },
    data () {
      return {}
    }
  },
  methods: {
    __resizeMousemove (e) {
      stopAndPrevent(e)
      this.__resize(resizePosition, e)
    },
    __resizeMouseup (e) {
      stopAndPrevent(e)
    },
    __resizeMousedown (e, position) {
      stopAndPrevent(e)
      if (typeof this.defineActive === 'function') {
        this.defineActive()
      }
      pos3 = e.clientX
      pos4 = e.clientY
      resizePosition = position
    },
    __getElementSize () {
      return {ewidth: width(this.$el), eheight: height(this.$el)}
    },
    __resize (position, e) {
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      console.log(pos3, pos4)
      /* if (pos3 > screenWidth) {
        pos3 = screenWidth
      }
      if (pos3 < 0) {
        pos3 = 0
      }
      if (pos4 > screenHeight) {
        pos4 = screenHeight
      }
      if (pos4 < 0) {
        pos4 = 0
      } */
      // let {ewidth, eheight} = this.__getElementSize()
      let map = {
        'r-top-left': this.__resizeLeftTop,
        'r-bottom-left': this.__resizeLeftBottom,
        'r-left': this.__resizeLeft,
        'r-top-right': this.__resizeRightTop,
        'r-top': this.__resizeTop,
        'r-right': this.__resizeRight,
        'r-bottom': this.__resizeBottom,
        'r-bottom-right': this.__resizeRightBottom
      }
      if (map[position] === void 0) return
      map[position](e)
    },
    __resizeRight (e) {
      let {screenWidth} = getWindowScreenSize()
      let {ewidth} = this.__getElementSize()
      let newPos = (ewidth - pos1)
      let {left} = offset(this.$el)
      console.log(ewidth, left, screenWidth)
      if ((ewidth + left) > screenWidth) return
      this.$el.style.width = newPos + 'px'
    },
    __resizeLeft (e) {
      let {ewidth} = this.__getElementSize()
      this.$el.style.width = (ewidth + pos1) + 'px'
      let {left} = offset(this.$el)
      this.$el.style.left = (left - pos1) + 'px'
    },
    __resizeTop (e) {
      let {eheight} = this.__getElementSize()
      this.$el.style.height = (eheight + pos2) + 'px'
      let {top} = offset(this.$el)
      this.$el.style.top = (top - pos2) + 'px'
    },
    __resizeBottom (e) {
      let {eheight} = this.__getElementSize()
      this.$el.style.height = (eheight - pos2) + 'px'
    },
    __resizeLeftTop (e) {
      this.__resizeLeft(e)
      this.__resizeTop(e)
    },
    __resizeLeftBottom (e) {
      this.__resizeLeft(e)
      this.__resizeBottom(e)
    },
    __resizeRightTop (e) {
      this.__resizeRight(e)
      this.__resizeTop(e)
    },
    __resizeRightBottom (e) {
      this.__resizeRight(e)
      this.__resizeBottom(e)
    }
  }
}
