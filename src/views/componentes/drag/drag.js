import { onMounted, ref } from '@vue/runtime-core'

export default {
  setup () {
    const html = ref()
    var countelements = ref(0)
    onMounted(() => {
    })
    const onClick = () => {
      var element = document.getElementById('drg')
      element.appendChild(onCreateElement())
      console.log(element)
    }
    const onCreateElement = () => {
      var element = document.createElement('div')
      element.style.width = '200px'
      element.style.height = '50px'
      element.style.border = 'solid 1px'
      element.id = 'element_id_' + (countelements += 1)
      element.className += ' position'
      element.style.top = '10px'

      return element
    }
    return { onClick, html }
  }
}
