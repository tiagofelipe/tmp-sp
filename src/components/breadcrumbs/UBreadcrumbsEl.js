import { UIcon } from '../icon'
import { routerLinkProps } from '../../utils/router-link.js'

export default {
  name: 'UBreadcrumbsEl',
  mixins: [{ props: routerLinkProps }],
  props: {
    label: String,
    icon: String,
    color: String
  },
  render (h) {
    return h(this.to !== void 0 ? 'router-link' : 'span', {
      staticClass: 'u-link u-breadcrumbs-el flex inline items-center relative-position',
      props: this.to !== void 0 ? this.$props : null
    }, [
      this.icon ? h(UIcon, { staticClass: 'u-breacrumbs-el-icon m-r-sm', props: { name: this.icon } }) : null,
      this.label
    ].concat(this.$slots.default))
  }
}
