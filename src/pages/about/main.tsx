import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'About',
  setup() {
    return () => {
      return (
        <div class="home">
          <h2 class="title">About tsx working</h2>
          <div class="image-box"></div>
        </div>
      );
    }
  }
});
