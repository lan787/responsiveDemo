<template>
  <div class="containers">
    <div class="Layouts">
      <div class="header">
        <div class="top">
          <b-navbar type="light" justified fill>
            <div>
              <b-navbar-brand href="#">
                <img
                  src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo.svg"
                  width="36px"
                  alt="Kitten"
                />
              </b-navbar-brand>
              <b-navbar-brand href="#">门店</b-navbar-brand>
              <b-navbar-brand href="#">我的账户</b-navbar-brand>
              <b-navbar-brand href="#">菜单</b-navbar-brand>
            </div>
            <div>
              <b-navbar-brand href="#" style="display: flex">
                <div @click="flags = !flags">
                  <i :class="flags ? 'zi zi_listul' : 'zi zi_times'"></i>
                </div>
              </b-navbar-brand>
            </div>
          </b-navbar>
        </div>
        <div class="headerContent">
          <div class="contents">
            <h2 style="font-size: 20px; font-weight: 700" v-if="flags">
              心情惬意，来杯咖啡吧 ☕
            </h2>
            <div v-else class="ulList">
              <ul>
                <li><a href="#">门店</a></li>
                <li><a href="#">星享俱乐部</a></li>
                <li><a href="#">菜单</a></li>
                <li class="lines"></li>
                <li><a href="#">星巴克移动端应用</a></li>
                <li><a href="#">星礼卡</a></li>
                <li><a href="#"> 星巴克臻选™ </a></li>
                <li><a href="#"> 啡快™ － 在线点 到店取 </a></li>
                <li><a href="#"> 专星送™ </a></li>
                <li><a href="#">咖啡星讲堂</a></li>
                <li><a href="#">上海烘焙工坊</a></li>
                <li><a href="#">关于星巴克</a></li>
                <li><a href="#">帮助中心</a></li>
                <li  class="lines"></li>
              </ul>
            </div>
            <div class="floats" style="margin-top: 15px">
              <div class="floats">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-account.svg"
                  width="28px"
                  alt=""
                />
                <a
                  href="#"
                  style="
                    color: #00a862;
                    font-size: 18px;
                    text-decoration: none;
                    padding-left: 10px;
                  "
                  >登录</a
                >
              </div>
              <b-button variant="outline-success" pill style="margin-left: 24px"
                >注册</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: true,
      icons: true,
      message: "5555555",
      mes: "52222",
    };
  },
  components: {},
};
</script>

<style lang="scss">
.ulList li{
  list-style: none;
}
.ulList li a{
  text-decoration: none;
  font-weight: 700;
  color: #000;
  font-size: 20px;
}
.ulList ul{
  margin-left: 0;
  padding-left: 0;
}
.ulList li.lines{
  height: 1px;
  background: #000;
}
.floats {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
.containers {
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    display: flex;
  }
  width: 100%;
  height: 100%;
}
.Layouts {
  @media only screen and (min-width: 1024px) {
    width: 40%;
    position: fixed;
    left: 0;
  }
  width: 100%;

  height: 100%;
  //  overflow: hidden;
}
.main {
  @media only screen and (min-width: 1024px) {
    position: fixed;
    overflow-y: auto;
    right: 0;
    display: block;
    width: 60%;
  }
  width: 100%;

  height: 100%;
  // overflow: hidden;
}
.headerContent {
  @media only screen and (min-width: 1024px) {
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  height: 100%;
}
.header {
  overflow: hidden;

  height: 100%;
}
.top {
  margin-top: 15px;
  padding-left: 15px;
  // height: 100%;
}
.top a.navbar-brand {
  font-size: 16px;
  font-weight: 700;
}
.navbar-expand {
  justify-content: space-between !important;
  align-items: center !important;
}
</style>