import UlocCore from 'uloc'
// import IconFontAwesomeSvgPro from '../src/components/icon/IconFontAwesomeSvgPro'
import IconFontAwesomeWeb from '../src/components/icon/IconFontAwesomeWeb'
// import IconUlocPackage from '../src/components/icon/IconUlocPackage'
import IconMaterialWeb from '../src/components/icon/IconMaterialWeb'

export function createIcons () {
  UlocCore.IconLibrary.add([
    {
      name: 'fa',
      component: IconFontAwesomeWeb,
      type: 'web'
    },
    /* {
      name: 'uloc',
      component: IconUlocPackage
    }, */
    {
      name: 'default',
      component: IconMaterialWeb
    },
    {
      name: 'material',
      component: IconMaterialWeb
    }
  ])
}
