<template>
    <section class="h-full flex justify-center my-24">
        <div class="w-[95%] md:w-[80%] flex flex-col xl:flex-row justify-between">
            <div class="flex flex-col gap-4 items-center md:items-start">
                <h1 class="text-[#09406C] text-xs font-semibold text-center md:text-start">
                    Support
                </h1>
                <h2 class="ubuntu-font text-3xl w-[320px] text-center md:text-start">
                    Frequently asked question
                </h2>
                <p class="text-gray-500 font-light w-[360px] text-center md:text-start">
                    .Here, you'll answers to a wide range of common inquires, providing you with the insights and
                    clarity you need
                </p>
                <div
                    class="w-[360px] h-[240px] rounded-2xl border-2 border-gray-200 flex flex-col justify-center gap-2 px-8">
                    <img class="w-[120px] mb-3" src="/assets/image/faq-profiles.png" alt="">
                    <h3 class="font-bold">
                        Still Have Question
                    </h3>
                    <p class="font-light">
                        Can't find the answer you're looking for?
                        Please chat our team
                    </p>
                    <button class="bg-black rounded-full text-white text-xs w-[116px] px-2 py-2 hover:bg-[#01D06D]">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-12 xl:mt-0">
                <!-- call components from faq-card file by looping in faq_cards -->
                <FaqCard v-for="faq_card in faq_cards" :title="faq_card.title"/>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      // create array type data to fill the faq-card component
      faq_cards: [
        { title: 'Who needs the B211A visa?' },
        { title: 'How long is the visa valid?' },
        { title: 'How long does it take for my visa to be ready?' },
        { title: 'How often does it happen that a visa application is rejected?' },
        { title: 'Who is my sponsor?' },
        { title: 'Do I have to go into quarantine upon entry?' }
      ]
    }
  }
}
</script>