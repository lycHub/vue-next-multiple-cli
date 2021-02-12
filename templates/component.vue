<template>
  <div class="{{rootCls}}">
    {{name}} component working;
  </div>
</template>
<script>
  import {defineComponent} from 'vue';
  export default defineComponent({
    name: "{{name}}",
    setup(props, context) {
      return {
      
      }
    }
  });
</script>

<style scoped lang="scss">
  .{{rootCls}} {
  
  }
</style>
