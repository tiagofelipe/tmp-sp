import UActionSheet from '../components/action-sheet/UActionSheet.js'
import modalFn from '../utils/modal-fn.js'

export default {
  install ({ $uloc, Vue }) {
    this.create = $uloc.actionSheet = modalFn(UActionSheet, Vue)
  }
}
