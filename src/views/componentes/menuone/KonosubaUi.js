var id = null
export default {
  data: () => ({
    tamanho: 0,
    internalmenu: null,
    items: [
      {
        route: '',
        name: 'Menu',
        toltip: '',
        icon: 'ks ks-dashboard',
        menu: [
          {
            route: '',
            name: 'Cadastros',
            toltip: '',
            icon: 'ks ks-dashboard'
          },
          {
            route: '',
            name: 'Thunais',
            toltip: '',
            icon: 'ks ks-dashboard'
          }
        ]
      },
      {
        route: '',
        name: 'Menu',
        toltip: '',
        icon: 'ks ks-person-plus',
        menu: [
          {
            route: '',
            name: 'RockFelar',
            toltip: '',
            icon: 'ks ks-dashboard'
          },
          {
            route: '',
            name: 'Thunais',
            toltip: '',
            icon: 'ks ks-dashboard'
          }
        ]
      }
    ]
  }),
  setup () {
    return {}
  },
  mounted () {
    const content = document.getElementById('content')
    content.addEventListener('click', this.onCloseMenu)
  },
  methods: {
    onOpenMenu (mnu) {
      this.internalmenu = mnu
      const menu = document.getElementById('side-menu')
      var tamanho = 0
      console.log(menu.style.width)
      if (menu.style.width === '' || menu.style.width === '0px') {
        clearInterval(id)
        id = setInterval(animacao, 0.1)
      }
      function animacao () {
        if (tamanho === 250) {
          clearInterval(id)
        } else {
          tamanho = tamanho + 5
          menu.style.width = tamanho + 'px'
        }
      }
    },
    onCloseMenu () {
      const menu = document.getElementById('side-menu')
      var tamanho = 250
      if (menu.style.width === '250px') {
        clearInterval(id)
        id = setInterval(animacao, 1)
      }
      function animacao () {
        if (tamanho === 0) {
          clearInterval(id)
        } else {
          tamanho = tamanho - 5
          menu.style.width = tamanho + 'px'
        }
      }
    }
  }
}
