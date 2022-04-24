<template>
  <div class="page">
    <div class="tools">
      <div @click="onClick" class="buttons-fun config">
        Conteiner
      </div>
    </div>
    <div class="body-page">
      <div id="drg" class="page-body-drag">
        <div class="position test">
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./drag.js">
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
