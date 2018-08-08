export default {
  props: {
    popover: Boolean,
    modal: Boolean
  },
  computed: {
    isPopover () {
      // Explicit popover / modal choice
      if (this.popover) return true
      if (this.modal) return false

      // Automatically determine the default popover or modal behavior
      return this.$uloc.platform.is.desktop && !this.$uloc.platform.within.iframe
    }
  }
}
