<template>
  <div class="h-full blue-gradient flex justify-center items-center">
    <div class="flex flex-col justify-center items-center w-[95%] my-20">
      <div class="text-center text-white flex flex-col gap-4">
        <h1 class="text-2xl font-semibold">
          Less effort to get your visa
        </h1>
        <p class="md:w-[500px] font-light opacity-50">
          Our service ensures that you can acquire your visa with ease, saving you time and energy, so you can focus on
          planning and enjoying your trip without complicated paperwork and procedures.
        </p>
      </div>
      <div class="wrapper w-full flex justify-center items-center mt-20 lg:mt-12 lg:overflow-x-scroll lg:overflow-y-hidden">
        <div
          class="grid gap-12 lg:grid-cols-4 lg:w-[1360px] place-items-center lg:gap-[360px] lg:ml-[472px] xl:gap-4 xl:ml-0">
          <!-- call components from get-visa-card file by looping in get_cards -->
          <GetVisaCard v-for="get_card in get_cards" :component="get_card.component" :title="get_card.title"
            :description="get_card.description" :imageUrl="get_card.imageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // create array type data to fill the get-visa-card component
      get_cards: [
        { title: 'Online Registration', description: 'Begin the visa application process by completing an online registration form and provide all information.', imageUrl: '/assets/image/get-visa/bg-purple.png', component: 'OnlineRegis' },
        { title: 'Submit Document', description: 'After registration, prepare and submit the required documents for your visa application.', imageUrl: '/assets/image/get-visa/bg-yellow.png', component: 'Upload' },
        { title: 'Make Payment', description: 'Once your documents are submitted, procees to make the payment for your visa applcation.', imageUrl: '/assets/image/get-visa/bg-red.png', component: 'Payment' },
        { title: 'Get Visa', description: 'After successful document verification and payment, you will receive your visa.', imageUrl: '/assets/image/get-visa/bg-blue.png', component: 'GetVisa' }
      ]
    }
  }
}
</script>