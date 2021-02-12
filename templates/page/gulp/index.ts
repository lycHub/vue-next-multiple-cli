import {createApp} from "vue";

createApp({
  name: '{{name}}',
  setup() {
    return {
      title: '{{name}} working server!'
    }
  }
}).mount('#{{name}}');
