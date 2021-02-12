import {defineComponent} from 'vue';
export default defineComponent({
  name: "{{name}}",
  setup(props, context) {
    return () => {
      return (
        <div class="{{rootCls}}">
          {{name}} component working
        </div>
      );
    }
  }
});
