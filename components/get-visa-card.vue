<template>
    <card class="w-[320px] h-[420px]">
        <div>
            <div class="relative">
                <!-- containt different image url from the caller file, because the cards have different images -->
                <img :src="imageUrl" alt="">
                <div class="absolute top-[50%] left-[9.5%]">
                    <!-- the function :is="" use for call dynamic component from different file by variable component from caller file, that content the name of the components -->
                    <component :is="component" />
                </div>
            </div>
        </div>
        <div class="text-center text-white flex flex-col justify-center items-center mt-36">
            <h2 class="text-xl font-semibold">
                <!-- containt different title from the caller file for every cards -->
                {{ title }}
            </h2>
            <p class="w-[280px] font-light opacity-50 mt-2">
                <!-- containt different description from the caller file for every cards -->
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
    // these are the variables to call any components from different file path
    components: {
        Payment,
        OnlineRegis,
        GetVisa,
        Upload
    },
    // the variables to accomodate value from array variables on the caller file
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