<script>
import Hero from '/components/sections/hero.vue';
import OneStopVisa from '/components/sections/one-stop-visa.vue';
import WhyYouShould from '/components/sections/why-you-should.vue';
import GetYourVisa from '/components/sections/get-your-visa.vue';


export default {
  components: {
    Hero,
    OneStopVisa,
    WhyYouShould,
    GetYourVisa
  }
}
</script>

<template>
  <div>
    <navbar/>
    <hero/>
    <OneStopVisa/>
    <WhyYouShould/>
    <GetYourVisa/>
  </div>
</template>
