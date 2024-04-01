<template>
    <card class="w-[320px] h-[420px]">
        <div>
            <div class="relative">
                <img :src="imageUrl" alt="">
                <div class="absolute top-[50%] left-[9.5%]">
                    <component :is="component" />
                </div>
            </div>
        </div>
        <div class="text-center text-white flex flex-col justify-center items-center mt-36">
            <h2 class="text-xl font-semibold">
                {{ title }}
            </h2>
            <p class="w-[245px] font-light opacity-50 mt-2">
                {{ description }}
            </p>
        </div>
    </card>
</template>
<script>
import Payment from '/components/payment.vue';
import OnlineRegis from '/components/online-regis.vue';
import GetVisa from '/components/get-visa.vue';
import Upload from '/components/upload.vue';
export default {
    components: {
        Payment,
        OnlineRegis,
        GetVisa,
        Upload
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        component: {
            type: String,
            required: true
        }
    }
}
</script>