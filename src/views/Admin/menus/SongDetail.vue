<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/SongManger' }"
      >歌曲管理</el-breadcrumb-item
    >
    <el-breadcrumb-item>单曲详情</el-breadcrumb-item>
  </el-breadcrumb>
  <h1></h1>
  <el-row :gutter="20">
    <el-col :span="16" class="left-options">
      <el-card shadow="always">
        <h4 style="margin-bottom: 0px !important">评分</h4>
        <el-row :gutter="20">
          <el-col :lg="12" :sm="24" :xs="24" style="height: 80px">
            <el-row :gutter="20" type="flex" align="bottom">
              <el-col :lg="6" style="font-size: 40px" :sm="4" :xs="8">
                8.0
              </el-col>
              <el-col :lg="18" :sm="20" :xs="16">
                <el-rate v-model="singerInfo.rate" allow-half />
              </el-col>
            </el-row>
          </el-col>
          <el-col :lg="6" :sm="24" :xs="24" class="flex-end"> 热度: </el-col>
          <el-col :lg="6" :sm="24" :xs="24" class="flex-end"> 收藏</el-col>
        </el-row>
      </el-card>
      <el-card shadow="always" style="padding: 20px 0">
        <h4>歌曲介绍</h4>
        <p>这是一首是啥哈哈哈哈是</p>
      </el-card>
    </el-col>
    <el-col :span="8" class="right-lyc">
      <el-card :body-style="{ padding: '0px' }">
        <div style="position: relative">
          <img
            src="@/assets/lyric/月に叢雲華に風/109951164945893554.jpg"
            class="image"
          />
          <el-icon
            :class="[
              'fixCenter',
              isPlay ? 'el-icon-video-pause' : 'el-icon-video-play',
            ]"
            style="font-size: 60px; color: #ffffff; cursor: pointer"
            @click="playSource()"
          ></el-icon>
        </div>
        <div
          class="lyc-wrap"
          ref="scrollView"
          @mouseleave="scrollViewTouchEnd"
          @mouseout="scrollViewTouchStart"
        >
          <ul class="lyc-container">
            <template v-for="(item, index) in lycList" :key="index">
              <li :class="{ scalLi: musicProgress === index }">
                {{ item }}
              </li>
            </template>
          </ul>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  ComputedRef,
  ref,
  Ref,
  nextTick,
  LiHTMLAttributes,
  onUnmounted,
} from "vue";
import { lyc } from "@/assets/lyric/月に叢雲華に風/月に叢雲華に風(原文).ts";
export default defineComponent({
  setup() {
    var timeReg: RegExp = /\[(\d*:\d*\.\d*)\]/;
    let coverImage = reactive({
      singerInfo: {
        coverImg: require("@/assets/musicDefault.jpg"),
        rate: 0,
        lyc: lyc.split("\n"),
      },
      isPlay: false,
    });
    const scrollView: Ref<Element | null> = ref(null);
    const audioPlay: Ref<HTMLAudioElement> = ref(new Audio());
    const musicProgress: Ref<number> = ref(0);
    const isOutScrollView: Ref<Boolean> = ref(false);
    const scrollViewTouchStart = () => {
      if (!isOutScrollView.value) {
        isOutScrollView.value = true;
      }
    };
    const scrollViewTouchEnd = () => {
      if (isOutScrollView.value) {
        isOutScrollView.value = false;
      }
    };
    onUnmounted(() => {
      audioPlay.value.pause();
    });
    nextTick(() => {
      let src: string = require("@/assets/lyric/月に叢雲華に風/月に叢雲華に風.mp3");
      audioPlay.value.setAttribute("src", src);
      audioPlay.value.ontimeupdate = (e) => {
        if (!isOutScrollView.value) {
          if (musicProgress.value > 5) {
            (scrollView.value as Element).scrollTop =
              (musicProgress.value - 5) * 30;
          }
        }
        let currentTime: number = +audioPlay.value.currentTime.toFixed(2);
        if (musicProgress.value === lycTimeList.value.length-1) {
          musicProgress.value = 0;
          (scrollView.value as Element).scrollTop = 0;

          return;
        }
        for (let i = musicProgress.value; i < lycTimeList.value.length; i++) {
          if (+lycTimeList.value[i] >= currentTime) {
            musicProgress.value = i;
            break;
          }
        }
      };
      //   audioPlay.value.addEventListener("timeupdate", (e: Event) => {
      //     //    let currentTime:number =  +audioPlay.value.currentTime.toFixed(2);
      //      console.log(audioPlay.value.currentTime)
      //         // console.log(currentTime)
      //     //    for(let i = musicProgress.value;i<lycTimeList.value.length;i++){
      //     //        console.log(currentTime,lycTimeList.value[i])
      //     //         if(+lycTimeList.value[i] === currentTime){
      //     //            musicProgress.value = i;
      //     //            break;
      //     //         }
      //     //    }
      //   });
    });
    const lycList: ComputedRef<string[]> = computed(
      (): Array<string> => {
        return coverImage.singerInfo.lyc
          .filter((item) => {
            return item.split("]")[1] !== "";
          })
          .map((item) => item.split("]")[1]);
      }
    );
    const lycTimeList: ComputedRef<string[]> = computed(() => {
      return coverImage.singerInfo.lyc
        .filter((item) => {
          return item.split("]")[1] !== "";
        })
        .map((item) => {
          let timer: string = (timeReg.exec(item) as RegExpExecArray)[1];
          let timerList: Array<string> = timer.split(":");

          return (+timerList[0] * 60 + +timerList[1]).toFixed(2);
        });
    });
    const playSource = () => {
      if (!coverImage.isPlay) {
        audioPlay.value.play();
      } else {
        audioPlay.value.pause();
      }
      coverImage.isPlay = !coverImage.isPlay;
    };
    return {
      ...toRefs(coverImage),
      lycList,
      lycTimeList,
      scrollView,
      audioPlay,
      playSource,
      isOutScrollView,
      musicProgress,
      scrollViewTouchStart,
      scrollViewTouchEnd,
    };
  },
});
</script>
<style lang="less">
.el-breadcrumb {
  padding: 20px 0;
  border-bottom: 1px solid #ebebeb;
}
.left-options {
  .el-card__body,
  .el-main {
    padding: 10px 20px !important;
  }
  .el-card__body {
    .el-col {
      padding: 14px 0;
      .el-rate {
        height: 30px !important;
        .el-rate__icon {
          font-size: 25px !important;
        }
      }
    }
  }
}
.right-lyc {
  .lyc-wrap {
    width: 100%;
    height: 400px;
    overflow: hidden auto;
    text-align: center;
    transition: scroll 0.5s;

    .lyc-container {
      padding-left: 0 !important;
      li {
        text-align: center;
        font-size: 14px;
        margin: 0;
        height: 30px;
        line-height: 30px;
      }
    }
  }

  .image {
    width: 100%;
    display: block;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
.scalLi {
  transform: scale(1.2);
  color: @themeColor;
  font-weight: bolder;
}

@media screen and (min-width: 1200px) {
  .flex-end {
    height: 80px;
    display: flex;
    align-items: flex-end;
    // padding-bottom: 28px !important;
  }
}

//滚动条全局样式：
// 滚动条设置
::-webkit-scrollbar {
  width: 0px; //y轴上的滚动条宽度
  height: 0px; //x轴上滚动条高度
}
::-webkit-scrollbar-track {
  border-radius: 3px; /*滚动条的背景区域的圆角*/
  background-color: #fdf8f5; /*滚动条的背景颜色*/
}
::-webkit-scrollbar-thumb {
  border-radius: 3px; /*滚动条的圆角*/
  background-color: #ccc; /*滚动条的背景颜色*/
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(46, 86, 159);
}

::-webkit-scrollbar-thumb:active {
  background-color: rgb(46, 86, 159);
  cursor: pointer;
}
</style>