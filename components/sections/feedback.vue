<template>
    <div class="h-full my-24 flex justify-center items-center">
        <div class="flex flex-col justify-center items-center w-[90%] my-20">
            <div class="text-center">
                <h1 class="text-2xl ubuntu-font">
                    What our customer says
                </h1>
                <p class="opacity-50 md:w-[520px] mt-4">
                    Hear what our clients have to say about their journeys with us, and find out why they choose our
                    services time and time again.
                </p>
            </div>
            <div
                class="wrapper mt-12 flex xl:flex-col justify-center xl:justify-start items-center gap-80 xl:gap-0 overflow-x-scroll xl:overflow-auto w-full h-full">
                <div
                    class="ml-[1540px] md:ml-[1540px] lg:ml-[1460px] xl:ml-0 w-full h-[264px] grid grid-cols-3 place-items-center gap-[440px] xl:gap-0">
                    <FeedbackCard v-for="feedback_card in feedback_cards" :title="feedback_card.title"
                        :description="feedback_card.description" :imageUrl="feedback_card.imageUrl" />
                </div>
                <div
                    class="w-full h-[264px] grid grid-cols-2 px-48 place-items-center ml-[420px] md:ml-[86px] lg:ml-[-72px] xl:ml-0 gap-[440px] xl:gap-0">
                    <FeedbackCard v-for="feedback_card in feedback2_cards" :title="feedback_card.title"
                        :description="feedback_card.description" :imageUrl="feedback_card.imageUrl" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            feedback_cards: [
                { title: 'Mateo Goncalo', description: 'Visa Indonesia Official made my recent trip a breeze. Getting my visa with less effort was a game-changer. Their teams support was exceptional, ensuring I had all the necessary documents without any stress. Highly recommended!.', imageUrl: '/assets/image/feedback-profile/user-1.png' },
                { title: 'Imanuel Jyanda', description: "I'm a frequent traveler, and VisaIndonesia Official has been a truelifesaver. Their efficient visa serviceshave saved me time and energy. Thesecure payment with Xendit addedan extra layer of confidence. I won'tgo anywhere else for my visa needs.", imageUrl: '/assets/image/feedback-profile/user-2.png' },
                { title: 'Mark Hopus', description: 'The Get Document in One Clickfeature from Visa Indonesia Official isa game-changer! Its the ultimateconvenience for travelers like me. Theability to track my orders progressand get my documents instantlysimplified my travel plans.', imageUrl: '/assets/image/feedback-profile/user-3.png' }
            ],
            feedback2_cards: [
                { title: 'Chinmato', description: 'The Get Document in One Clickfeature from Visa Indonesia Official isa game-changer! Its the ultimateconvenience for travelers like me. Theability to track my orders progressand get my documents instantlysimplified my travel plans.', imageUrl: '/assets/image/feedback-profile/user-4.png' },
                { title: 'Anginan Marta', description: 'Visa Indonesia Official made my recent trip a breeze. Getting my visa with less effort was a game-changer. Their teams support was exceptional, ensuring I had all the necessary documents without any stress. Highly recommended!.', imageUrl: '/assets/image/feedback-profile/user-5.png' }
            ]
        }
    }
}
</script>