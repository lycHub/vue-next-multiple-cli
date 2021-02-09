import { defineComponent } from 'vue';
import './index.scss';

import ImageB from '../../assets/images/b.jpg';

export default defineComponent({
  name: 'Home',
  setup() {
    return () => {
      return (
        <div class="home">
          <h2 class="title">Home tsx working</h2>
          <a href="./about.html">to about</a>
          <div class="image-box"></div>
          <p>image: </p>
          <img src={ImageB} />
        </div>
      );
    }
  }
});
