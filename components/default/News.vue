<template>
  <div class="container w-1140px m-auto pb-100px">
    <h1 class="text-5xl text-center m-0 text-white uppercase">News</h1>

    <div class="flex flex-col h-100vh">
      <DefaultNewsPreviewSlider :news="newsItems" />

      <DefaultNewsViewSlider :slide="currentSlide" v-slot="{currentSlide}">
        <DefaultNewsCarouselSlide v-for="(slide, index) in newsItems" :key="index">
          <div v-show="currentSlide === index + 1">
            <DefaultNewsView :newsObject="slide" />
          </div>
        </DefaultNewsCarouselSlide>
      </DefaultNewsViewSlider>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentSlide = ref(2)
const goToSlide = (index) => {
  currentSlide.value = index + 1
}

const newsItems = [
  {
    title: 'Sommer Event 2022 (Deutsch)',
    date: '28. Mar 2022',
    img: 'News1',
    tags: ['Event', 'Patchlog'],
    content: `
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,
    contentImg: 'https://via.placeholder.com/575x450/7c3aed/808080?Text=Digital.com',
  },
  {
    title: 'Patchlog #2',
    date: '26. Mar 2022',
    img: 'News2',
    tags: ['Patchlog'],
    content: `
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,
    contentImg: 'https://via.placeholder.com/575x450/5c14d8/808080?Text=Digital.com',
  },
  {
    title: 'Maintenance 25. Mar 2022',
    date: '20. Mar 2022',
    img: 'News3',
    tags: ['Maintenance'],
    content: `
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,
    contentImg: 'https://via.placeholder.com/575x450/8a2be2/808080?Text=Digital.com',
  },
  {
    title: 'Patchlog #1',
    date: '15. Mar 2022',
    img: 'News4',
    tags: ['Patchlog'],
    content: `
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
            impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
            dolor obcaecati cumque sint quod minus beatae.
    `,
    contentImg: 'https://via.placeholder.com/575x450/0000ff/808080?Text=Digital.com',
  },
  // {
  //   title: 'Starter Event',
  //   date: '01. Mar 2022',
  //   img: 'News1',
  //   tags: ['Event'],
  //   content: `
  //    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
  //           impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
  //           dolor obcaecati cumque sint quod minus beatae.
  //   `,
  //   contentImg: 'https://via.placeholder.com/575x450/83c512/808080?Text=Digital.com',
  // },
  // {
  //   title: 'Release',
  //   date: '01. Mar 2022',
  //   img: 'News2',
  //   tags: ['Announcement'],
  //   content: `
  //    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
  //           impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
  //           dolor obcaecati cumque sint quod minus beatae.
  //   `,
  //   contentImg: 'https://via.placeholder.com/575x450/36747d/808080?Text=Digital.com',
  // },
  // {
  //   title: 'Beta',
  //   date: '01. Feb 2022',
  //   img: 'News3',
  //   tags: ['Event', 'Patchlog', 'Announcement'],
  //   content: `
  //    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos dolore
  //           impedit eveniet. Deleniti sed, quia et sit, facilis magnam eos vero neque
  //           dolor obcaecati cumque sint quod minus beatae.
  //   `,
  //   contentImg: 'https://via.placeholder.com/575x450/f9906f/808080?Text=Digital.com',
  // },
]
</script>

<style scoped></style>
