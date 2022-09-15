export function dynamicComponent(component: string) {
    const isTheFile = component.slice(0, 3)
    const file = component.charAt(0).toUpperCase() + component.slice(1)
  
    if (isTheFile == 'the') {
      /* prettier-ignore */
      return defineAsyncComponent(() => import(`~/components/${mode.value}/${file}.vue`))
    } else {
      /* prettier-ignore */
      return defineAsyncComponent(() => import(`~/components/${mode.value}/${component}/${file}.vue`))
    }
}

