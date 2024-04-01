<script>
import Hero from '/components/sections/hero.vue';
import OneStopVisa from '/components/sections/one-stop-visa.vue';
import WhyYouShould from '/components/sections/why-you-should.vue';


export default {
  components: {
    Hero,
    OneStopVisa,
    WhyYouShould
  }
}
</script>

<template>
  <div>
    <navbar></navbar>
    <hero></hero>
    <OneStopVisa></OneStopVisa>
    <WhyYouShould></WhyYouShould>
  </div>
</template>
