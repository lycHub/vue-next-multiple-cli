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
          <div class="image-box"></div>
          <p>image: </p>
          <img src={ImageB} />
        </div>
      );
    }
  }
});
