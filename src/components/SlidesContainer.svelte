<script lang="ts">
  import * as allIonicIcons from 'ionicons/icons';
  import { onMount } from 'svelte'
  import { register } from 'swiper/element/bundle';
  import { isPlatform } from '@ionic/core';
  // import 'swiper/swiper-bundle.min.css';
  //console.log('isPlatform(\'mobile\')',isPlatform('mobile'));
  //console.log('isPlatform(\'ios\')',isPlatform('ios'));
  //console.log('isPlatform(\'android\')',isPlatform('android'));
  let slides: any = null;
  export let controller: any = {}
  onMount(() => {
    register();
    initSlidesObject();
    //console.log('isPlatform(\'mobile\')',isPlatform('mobile'))
  });
  const initSlidesObject = () => {
    if (slides?.speed) return;
    const obj: any = document.getElementById('slides');
    if (obj) {
      slides = obj.swiper;
      controller.slides = slides;
    }
  }
  export let media: any = [];

    const imageClick = (e) => {
      // console.log('imageClick', e);
    };
    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        centeredSlides: true,
        centeredSlidesBounds: true,
    };
      const prev = async () => {
        initSlidesObject();
        if (slides !== null) {
            slides.slidePrev();
        }
      }
    
      const next = async () => {
        initSlidesObject();
        if (slides !== null) {
            slides.slideNext();
            controller.isBeginning = slides.isBeginning;
            controller.isEnd = slides.isEnd;
        }
      }
      controller.prev = prev;
      controller.next = next;
</script>

      <div class="slides-wrapper">
            {#if !isPlatform('mobile')}
              <!-- <ion-button hidden={hideLeftArrow} class="btnPrev" on:click={prev}>
                  <ion-icon icon={allIonicIcons.arrowBackOutline}></ion-icon>
              </ion-button>
              <ion-button hidden={hideRightArrow} class="btnNext" on:click={next}>
              <ion-icon icon={allIonicIcons.arrowForwardOutline}></ion-icon>
              </ion-button> -->
            {/if}
            <swiper-container class="swiperclass" pager={true} pagination={{type:"fraction"}} id="slides" options={slideOpts}>
                {#each media as item}
                    <swiper-slide align="center" 
                        on:click={() => {imageClick(item.MediaURL.replace('http://','https://'))}}
                        key={item.MediaKeyNumeric} class="property-detail-photo-slide">
                        <img  class="image" src={item.MediaURL.replace('http://','https://')} alt="property" on:click={imageClick} />
                    </swiper-slide>                    
                {/each}
            </swiper-container>
          </div>

<style>
  .full-slide {
    /* image should fill the screen */
    width: 100%;
    height: 100%;
  }
  .image {
    max-height: 350px;
  }
  .swiperclass {
    --swiper-pagination-fraction-color: var(--ion-color-primary);
    --swiper-pagination-progressbar-bg-color: var(--ion-color-light);
    --swiper-pagination-color: var(--ion-color-primary);
    /* --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, 0.75); */
    /* --swiper-pagination-progressbar-size: 4px; */
  }
  .btnPrev {
    position: absolute;
    top: 48%;
    left: 0;
    z-index: 99;
    background: transparent;
    --background: transparent !important;
    --box-shadow: none !important;
    font-size: 25px;
    outline: 0;
    color: var(--ion-text-color);
    /*color: #fff;*/
  }

  .btnNext {
    position: absolute;
    top: 49%;
    right: 0;
    z-index: 99;
    background: transparent;
    --background: transparent !important;
    --box-shadow: none !important;
    font-size: 25px;
    outline: 0;
    color: var(--ion-text-color);
    /*color: #fff;*/
  }
  .property-detail-photo-slide {
    /*height: 30vh;*/
    /*background-color: #ccc;*/
  }
</style>