<template>
    <div class="h-full w-full bg-[#f9f9f9] flex justify-center items-center">
        <div class="w-[90%] my-24 lg:my-48">
            <div class="text-center flex flex-col gap-4 items-center">
                <span class="ubuntu-font text-3xl">
                    One-stop Visa in Indonesia
                </span>
                <span class="w-[320px] md:w-[480px] text-[#8C8C8C]">
                    We offers services that hassle-free and streamlined process for obtaining visas to enter and stay in
                    Indonesia
                </span>
            </div>
            <div class="wrapper w-full overflow-x-scroll flex flex-row items-center justify-start mt-20 lg:mt-12">
                <div class="w-[1520px] flex lg:justify-between gap-3 md:gap-10 lg:gap-4">
                    <!-- card background template for one-stop-card -->
                    <card v-for="onestop_card in onestop_cards"  class="w-[324px] md:w-[424px] h-[324px] md:h-[424px] bg-[#121212] rounded-2xl overflow-hidden">
                        <!-- get the image url from the array data -->
                        <img :src="imageUrl" alt="">
                        <!-- call components from one-stop-card file by looping in onestop_cards -->
                        <OneStopCard :class="onestop_card.className" :title="onestop_card.title" :description="onestop_card.description" :imageUrl="onestop_card.imageUrl" ></OneStopCard>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      // create array type data to fill the one-stop-card component
      onestop_cards: [
        { title: 'B211A', description: 'Experience a streamlined visa process with B211A, your gateway to hassle-free travel arrangements.', imageUrl: '/assets/image/onestop/blue-neon.png', className: 'border-blue-neon' },
        { title: 'Visa on Arrival', description: 'Simplify your entry experience with visa on arrival, ensuring a smooth start to your journey.', imageUrl: '/assets/image/onestop/red-neon.jpg', className: 'border-red-neon' },
        { title: 'Extend Visa', description: 'Extend your stay and make the most of your travel adventure with our convenient visa extension services.', imageUrl: '/assets/image/onestop/orange-neon.jpg', className: 'border-orange-neon' }
      ]
    }
  }
}
</script>