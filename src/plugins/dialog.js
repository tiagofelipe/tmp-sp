import UDialog from '../components/dialog/UDialog.js'
import modalFn from '../utils/modal-fn.js'

export default {
  install ({ $uloc, Vue }) {
    this.create = $uloc.dialog = modalFn(UDialog, Vue)
  }
}
