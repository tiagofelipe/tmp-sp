import { isSSR } from './platform.js'
import UAjaxBar from '../components/ajax-bar/UAjaxBar.js'

export default {
  start () {},
  stop () {},
  increment () {},

  install ({ $uloc, Vue, cfg }) {
    if (isSSR) {
      $uloc.loadingBar = this
      return
    }

    const bar = $uloc.loadingBar = new Vue({
      render: h => h(UAjaxBar, {
        ref: 'bar',
        props: cfg.loadingBar
      })
    }).$mount().$refs.bar

    Object.assign(this, {
      start: bar.start,
      stop: bar.stop,
      increment: bar.increment
    })

    document.body.appendChild($uloc.loadingBar.$parent.$el)
  }
}
