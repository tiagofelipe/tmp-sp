import categories from './categories'
import Main from './components/Main'

const routes = []

export const menu = []

function lazyLoad (path, meta) {
  return {
    path,
    meta,
    component: () => import('./showcase/' + path)
  }
}

const showcase = {
  path: '/showcase',
  component: Main,
  children: []
}

categories.forEach(category => {
  if (category.extract) {
    return
  }

  menu.push({headerTitle: category.title})

  category.features.forEach(feature => {
    let path = category.hash + '/' + feature.hash

    if (!feature.tabs) {
      showcase.children.push(lazyLoad(path, feature))
      menu.push({
        name: feature.title,
        icon: feature.icon,
        href: '#/showcase/' + path
      })
      return
    }

    let subItems = []
    feature.tabs.forEach(tab => {
      let subpath = path + '/' + tab.hash
      showcase.children.push(lazyLoad(subpath, {
        title: tab.title,
        hash: '/' + path,
        iframeTabs: feature.iframeTabs,
        icon: feature.icon,
        tabs: feature.tabs
      }))
      subItems.push({
        name: tab.title,
        icon: tab.icon,
        href: '#/showcase/' + subpath
      })
    })

    routes.push({
      path: '/showcase/' + path,
      redirect: '/showcase/' + path + '/' + feature.tabs[0].hash
    })

    menu.push({
      name: feature.title,
      icon: feature.icon,
      href: '#/showcase/' + path,
      submenu: subItems
    })
  })
})

routes.push(showcase)
routes.push({
  path: '/showcase/layout-demo',
  component: () => import('./layouts/layout-demo'),
  children: [
    {path: 'play-with-layout', component: () => import('./showcase/layout-demo/play-with-layout')},
    {path: 'drawer-panels', component: () => import('./showcase/layout-demo/drawer-panels')},
    {path: 'page-sticky', component: () => import('./showcase/layout-demo/page-sticky')},
    {path: 'floating-action-button', component: () => import('./showcase/layout-demo/floating-action-button')}
  ]
})
routes.push({ path: '/showcase/*', component: () => import('./error404.vue') })

export default routes
