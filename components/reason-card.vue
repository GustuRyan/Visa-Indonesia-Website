<template>
    <div class="flex flex-col justify-center md:w-[456px] h-[200px] text-center gap-4">
        {{ data }}
        <div class="flex justify-center">
            <img class="w-[240px]" :src="imageUrl" alt="">
        </div>
        <h1 class="font-bold text-2xl">
            {{ title }}
        </h1>
        <p class="text-[#8C8C8C]">
            {{ description }}
        </p>
    </div>
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
        data: {
            type: Object,
            required: true
        }
    }
}
</script>