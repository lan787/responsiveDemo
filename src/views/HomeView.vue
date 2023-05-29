<template>
  <div class="home">
    <div class="header">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          img-width="100%"
          img-height="450px"
          label-prev=""
          label-next=""
        >
          <b-carousel-slide
            img-src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_85819d0d-0878-4e92-95a8-a944799b631e.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_9b62183b-633a-4dc1-a4a6-627a22cca859.png"
          ></b-carousel-slide>
          <b-carousel-slide
            img-src="https://artwork.starbucks.com.cn/banners-homepage-banner/main_61babe13-d569-476b-8bd6-e75068943318.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div style="padding: 24px; background: #f7f7f7">
      <div class="row">
        <div class="col-12 col-md-4">
          <a href="#" class="ho-img hvr-bob">
            <img
              class="img-fluid lazy"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg"
            />
          </a>
        </div>
        <div class="col-12 col-md-4">
          <a href="#" class="ho-img hvr-bob">
            <img
              class="img-fluid lazy"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg"
            />
          </a>
        </div>
        <div class="col-12 col-md-4">
          <a href="#" class="ho-img hvr-bob">
            <img
              class="img-fluid lazy"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-new.png"
            />
          </a>
        </div>
      </div>
    </div>
    <div style="background: #fff; padding: 24px">
      <div class="row">
        <div class="col-12 col-md-6 SecondFont">
          <p>星亨俱乐部</p>
          <div class="secondmore">
            <p>
              开启您的星享，之旅，星星越多、会员等级越高、 好礼越丰富<a href=""
                >了解更多 ›</a
              >
            </p>
          </div>
          <div class="btnBox">
            <b-button pill variant="outline-success" style="margin-right: 15px"
              >登录</b-button
            >
            <b-button pill variant="outline-success">注册</b-button>
          </div>
        </div>
        <div
          class="col-12 col-md-6"
          style="display: flex; justify-content: center; align-items: center"
        >
          <img
            class="lazy"
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo-msr-20210601.svg"
            width="236px"
          />
        </div>
      </div>
    </div>
    <div style="background: #f7f7f7; padding: 24px">
      <div class="tmallText">
        <p>星巴克精选</p>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
      </div>
      <div class="tamllcontent">
        <a href="" class="hvr-bob">
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png"
            class="lazy"
            width="100px"
            alt=""
          />
          <p class="title1">会员星礼包</p>
          <p class="title2">星享卡新升级<br />更多心意好礼</p>
          <p class="title3">了解更多 ›</p>
        </a>

        <a href="" class="hvr-bob">
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-02.png"
            class="lazy"
            width="100px"
            alt=""
          />
          <p class="title1">星礼卡</p>
          <p class="title2">用一份心礼<br />让心意相随</p>
          <p class="title3">了解更多 ›</p>
        </a>
        <a href="" class="hvr-bob">
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-eticket.png"
            class="lazy"
            width="100px"
            alt=""
          />
          <p class="title1">电子产品券</p>
          <p class="title2">心意<br />从这一杯开始</p>
          <p class="title3">了解更多 ›</p>
        </a>
        <a href="" class="hvr-bob">
          <img
            src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-reserve.png"
            class="lazy"
            width="100px"
            alt=""
          />
          <p class="title1">咖啡生活</p>
          <p class="title2">星巴克<br />用心制作</p>
          <p class="title3">了解更多 ›</p>
        </a>
      </div>
    </div>
    <div style="overflow: hidden">
      <div class="swiper-container">
        <div class="swiper-wrapper" id="wrapper" ref="wrapper">
          <div class="swiper-slide hvr-bob" ref="wrapperItem">
            <div class="swiperImg">
              <img
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
                width="100%"
                height="100%"
                alt="Responsive image"
              ></img>
              <span class="tag">咖啡知识</span>
            </div>
            <p class="txt">咖啡的起源与培植</p>
          </div>
          <div class="swiper-slide hvr-bob">
            <div class="swiperImg">
              <img
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-4-fundamentals-kv.jpg"
                 width="100%"
                height="100%"
                alt="Responsive image"
              ></img>
              <span class="tag">咖啡品鉴</span>
            </div>
            <p class="txt">咖啡调制</p>
          </div>
          <div class="swiper-slide hvr-bob">
            <div class="swiperImg">
              <img
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-roast-story-kv.jpg"
                 width="100%"
                height="100%"
                alt="Responsive image"
              ></img>
              <span class="tag">咖啡知识</span>
            </div>
            <p class="txt">咖啡烘焙</p>
          </div>
           <div class="swiper-slide hvr-bob">
            <div class="swiperImg">
              <img
                src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-pour-over-kv.jpg"
                 width="100%"
                height="100%"
                alt="Responsive image"
              ></img>
              <span class="tag">咖啡品鉴</span>
            </div>
            <p class="txt">手冲咖啡</p>
          </div>
        </div>
        <div @click="FnLeft" class="swiper-button-prev swiper-button"><img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-scroll-left.svg" alt=""></div>
        <div @click="FnRight" class="swiper-button-next swiper-button"><img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-scroll-right.svg" alt=""></div>
      </div>
    </div>
    <div class="footer">
     <a href="">
      <span><img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png" width="14px" alt=""></span>
      <span> 沪公网安备 31010402000253号 |</span>
      <span> 沪ICP备17003747号-1 </span>
     </a> 
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      slide: 0,
      sliding: null,
      clientWdith: "",
      scrollLeft :0
    };
  },
  mounted() {
  },
  methods: {
    FnLeft(){
      if(this.scrollLeft==0) return
      let dom=this.$refs.wrapper
      this.scrollLeft+=50
      console.log(dom.clientWidth,this.scrollLeft)
      dom.style.transform=`translate(${this.scrollLeft}px,0)` 
   
    },
    FnRight(){
      if(Math.abs(this.scrollLeft)>=250)return
      this.scrollLeft-=50
      let dom=this.$refs.wrapper
     
      console.log(dom.clientWidth,this.scrollLeft)
      dom.style.transform=`translate(${this.scrollLeft}px,0)` 
    },
  },
};
</script>
<style lang="scss" scoped>
.swiper-button-prev{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  z-index: 100;
}
.swiper-button-next{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}
.footer {
  text-align: center;
  padding-bottom: 15px;
  a {
    text-decoration: none;
    line-height: 1;
    vertical-align: middle;
  }
  span {
    color: #666;
    font-size: 14px;
    line-height: 1;
  }
}
.swiper-container{
  width: 100%;
  padding-bottom: 10px;
  position: relative;
}
.swiper-slide {
   @media only screen and (min-width: 390px) {
   width: 70%;
  }
  
  @media only screen and (min-width: 768px) {
   width: 30%;
  }
 @media only screen and  (min-width:391px)and (max-width: 767px){
   width: 55%;
  }
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
  margin-right: 16px;
}
.swiper-button{
    border-radius: 50%;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    background: white;
    cursor: pointer;
    height: 28.8px;
    width: 28.8px;
}
.swiperImg {
  // margin-left: 16px;
  position: relative;
  width: 100%;
  height: 168px;
  
}
.tag {
  position: absolute;
  left: 0;
  top: 8px;
  background: #c2a661;
  color: #fff;
  // position: absolute;
  padding: 4px 12px;
}
.txt {
  margin-top: 12px;
  font-size: 16px;
  text-align: left;
  margin-left: 16px;
}
.tamllcontent {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}
.tamllcontent a {
  @media only screen and (max-width: 768px) {
    width: 40%;
  }
  display: block;
  width: 180px;
  margin: 0 15px 50px 0;
  position: relative;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  background: #fff;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  // padding-top: 15px;
}
.tamllcontent a:last-child {
  margin: 0 0 50px 0;
}
.tamllcontent a:nth-child(even) {
  @media only screen and (max-width: 768px) {
    margin: 0 0 50px 0;
  }
}

.tamllcontent a .title1 {
  padding-top: 44px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}
.tamllcontent a .title2 {
  // padding-top: 25px;
  font-size: 14px;
  // font-weight: 700;
  line-height: 1.7;
  color: #5a5a5a;
}
.tamllcontent a .title3 {
  font-size: 14px;
  color: #c2a661;
  padding-bottom: 24px;
}
.tamllcontent a img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.tmallText p {
  text-align: center;
  font-size: 16px;
  color: #5a5a5a;
}
.tmallText p:first-child {
  margin-top: 10px;
  font-size: 22px;
  color: #000;
}
.SecondFont {
  @media only screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
}
.SecondFont p {
  font-size: 16px;
  line-height: 2;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
}
.SecondFont > p {
  font-size: 22px;
  line-height: 1;
}
.SecondFont div a {
  color: #c2a661 !important;
  text-decoration: none;
  padding: 0 8px;
}
.secondmore p {
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
  width: 365px;
}
.secondmore p a {
  @media only screen and (max-width: 768px) {
    display: block;
  }
}
// .SecondFont div p{
//   @media only screen and (max-width:768px) {
//       text-align: center;
//   }
//   font-size:16px;
//   line-height: 2!important;
// }
.btnBox {
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
}
// .SecondFont div p a{
//   color: #c2a661!important;
//   text-decoration: none;
//   padding-left: 8px;

// }
// .SecondFont p:nth-child(1){
//   font-size:  22px;
//   line-height: 1;
// }
.ho-img {
  display: block;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
}

.ho-img img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.6s;
}

.ho-img img:hover {
  transform: scale(1.05);
}
.home{
  // overflow-y: auto;
}
</style>
