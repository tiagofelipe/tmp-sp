import { setBrand } from './utils/colors.js'

function getBodyClasses ({ is, has, within }, cfg) {
  const cls = [
    process.env.THEME,
    is.desktop ? 'desktop' : 'mobile',
    has.touch ? 'touch' : 'no-touch'
  ]

  if (is.cordova) {
    cls.push('cordova')

    if (is.ios && (cfg.cordova === void 0 || cfg.cordova.iosStatusBarPadding !== false)) {
      const
        ratio = window.devicePixelRatio || 1,
        width = window.screen.width * ratio,
        height = window.screen.height * ratio

      if (width === 1125 && height === 2436) { // iPhoneX fullscreen
        cls.push('u-ios-statusbar-x')
      }
      if (width !== 1125 || height !== 2001) { // not iPhoneX on non-fullscreen
        cls.push('u-ios-statusbar-padding')
      }
    }
  }
  within.iframe && cls.push('within-iframe')
  is.electron && cls.push('electron')

  return cls
}

function bodyInit (Platform, cfg) {
  const cls = getBodyClasses(Platform, cfg)

  if (Platform.is.ie && Platform.is.versionNumber === 11) {
    cls.forEach(c => document.body.classList.add(c))
  }
  else {
    document.body.classList.add.apply(document.body.classList, cls)
  }

  if (Platform.is.ios) {
    // needed for iOS button active state
    document.body.addEventListener('touchstart', () => {})
  }
}

function setColors (brand) {
  for (let color in brand) {
    setBrand(color, brand[color])
  }
}

export default {
  install ($uloc, queues, cfg) {
    cfg.brand && setColors(cfg.brand)
    bodyInit($uloc.platform, cfg)
  }
}
