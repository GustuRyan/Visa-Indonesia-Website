<template>
    <div class="h-full w-full flex justify-center items-center my-32 lg:my-24">
        <div class="w-[90%] ">
            <div class="flex flex-col justify-center items-center text-center">
                <h1 class="font-bold text-sm">
                    1000+ Customer Order
                </h1>
                <h2 class="ubuntu-font text-2xl w-[320px] mt-4">
                    Why you should choose Visa Indonesia Official
                </h2>
                <p class="text-[#8C8C8C] md:w-[532px] mt-7">
                    Explore the Compelling Reasons to Choose Visa Indonesia Official for Your Visa and Travel Needs
                </p>
            </div>
            <div class="grid lg:grid-cols-2 gap-y-12 gap-x-2 xl:px-36 mt-12 place-items-center">
                <!-- call components from reason-card file by looping in reason_cards -->
                <div v-for="reason_card in reason_cards" class="h-[248px]">
                    <ReasonCard :title="reason_card.title" :description="reason_card.description" :imageUrl="reason_card.imageUrl" ></ReasonCard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      // create array type data to fill the reason-card component
      reason_cards: [
        { title: 'Easy online apply', description: 'Simplify your application process with our user-friendly online platform, making it convenient and effcient for you to submit your requests from the comfort of your home or office.', imageUrl: '/assets/image/reason/blue-neon.jpg', data: '<OnlineRegis></OnlineRegis>' },
        { title: 'Secure payment with Xendit', description: 'Rest easy knowing that your financial transactions are protected through our partnership with Xendit, ensuring the highest level of security for all your payments and purchases.', imageUrl: '/assets/image/reason/orange-neon.jpg' },
        { title: 'Check progress of your order', description: 'Stay in the loop and monitor the status of your orders, allowing you to track the journey of your requests from initiation to completion, providing you with peace of mind and transparency.', imageUrl: '/assets/image/reason/red-neon.jpg' },
        { title: 'Get document in one click', description: 'Experience ultimate convenience with our "one-click" document retrieval system, enabling you to access your essential documents instantly, saving you time and effort in the process.', imageUrl: '/assets/image/reason/purple-neon.jpg' }
      ]
    }
  }
}
</script>