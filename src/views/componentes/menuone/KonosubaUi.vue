<template>
  <div class="main">
    <div class="main-header">
      <div class="main-header-logo">
        logo
      </div>
      <div class="main-header-content">
        botoes
      </div>
    </div>
    <div class="main-body">
      <div class="side-bar">
        <div v-for="item in items" :key="item">
          <a href="javascript:alert('a')">
            <div class="side-bar-btns">
              <i :class="item.icon" ></i>
            </div>
          </a>
        </div>
      </div>
      <div class="content">
        Aqui irá ficar o conteudo
      </div>
    </div>
  </div>
</template>

<script src="./KonosubaUi.js">
</script>

<style lang="scss" scoped>
@import './KonosubaUi.scss';
@import './KonosubaUiMobile.scss';
</style>
