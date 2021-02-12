import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
  name: '{{name}}',
  setup() {
    return () => {
      return (
        <div class="{{name}}">
          <h2 class="title">{{name}} tsx working</h2>
        </div>
      );
    }
  }
});
