import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'About',
  setup() {
    return () => {
      return (
        <div class="about">
          <h2 class="title">About tsx working</h2>
          <a href="./home.html">to home</a>
          <div class="image-box"></div>
        </div>
      );
    }
  }
});
