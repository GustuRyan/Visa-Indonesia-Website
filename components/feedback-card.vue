<template>
    <card class="relative w-[400px] h-[220px] rounded-2xl border-2 border-[#F2F2F2] p-8 flex justify-between shadow">
        <img class="absolute w-[56px] top-[-16px]" src="/assets/image/quote-icon.png" alt="">
        <div class="flex items-center h-full">
            <div class="w-[68px] rounded-full h-[68px] overflow-hidden">
                <img class="w-full h-full" :src="imageUrl" alt="">
            </div>
        </div>
        <div class="flex flex-col justify-center gap-2 w-[252px]">
            <h2 class="font-bold">
                {{ title }}
            </h2>
            <p class="text-sm opacity-50">
                {{ description }}
            </p>
        </div>
    </card>
</template>
<script>
export default {
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
    }
}
</script>