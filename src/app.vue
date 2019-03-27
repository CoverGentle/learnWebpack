    
    
<template>
  <div>
    <h1>这是App组件</h1>
    <!-- 为什么这里叫做mt-button -->
    <mt-button type="danger" size="small">danger</mt-button>
    <mt-button type="default" size="normal">default</mt-button>
    <mt-button type="primary" size="large" @click="show" icon="more">primary</mt-button>

    <br>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodlist">Goodlist</router-link>
    <router-view></router-view>
  </div>
</template>
    
    <script>
//按需导入Toast组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {};
  },
  methods: {
    show() {
      Toast({
        message: "提示",
        position: "middle"
      });
    }
  }
};
</script>