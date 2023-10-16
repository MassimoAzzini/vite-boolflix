<script>
import Film from './partials/Film.vue';
import SerieTv from './partials/SerieTv.vue';

export default {
  name: 'Main',

  components: {
    Film,
    SerieTv
  }

}
</script>

<template>
  <main>
    <h1>Main</h1>
    
    <Film />
    <SerieTv />

  </main>
</template>


<style lang="scss" scoped>
main {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: grey;
  overflow: auto;
}

</style>