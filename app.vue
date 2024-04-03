<script>
import Hero from '/components/sections/hero.vue';
import OneStopVisa from '/components/sections/one-stop-visa.vue';
import WhyYouShould from '/components/sections/why-you-should.vue';
import GetYourVisa from '/components/sections/get-your-visa.vue';
import Feedback from '/components/sections/feedback.vue';
import Services from '/components/sections/services.vue';
import HomeFooter from '/components/home-footer.vue';
import FAQ from '/components/sections/faq.vue';

export default {
  components: {
    Hero,
    OneStopVisa,
    WhyYouShould,
    GetYourVisa,
    Feedback,
    Services,
    HomeFooter,
    FAQ
  }
}
</script>

<template>
  <div>
    <navbar/>
    <Hero/>
    <OneStopVisa/>
    <WhyYouShould/>
    <GetYourVisa/>
    <Feedback/>
    <Services/>
    <FAQ/>
    <HomeFooter/>
  </div>
</template>
