<template>
    <div class="relative w-full h-full p-4" :class="className">
        <div
            class="absolute top-[-1.3%] left-[-1.3%] bg-[#121212] w-[312px] md:w-[416px] h-[312px] md:h-[416px] rounded-xl z-20 text-white p-3">
            <div class="onestop-gradient w-full h-full">
                <div class="w-full flex justify-center pt-0 md:pt-4">
                    <img :src="imageUrl" class="w-[388px] h-auto" alt="">
                </div>
                <div class="px-4 md:px-6 md:py-3 flex flex-col gap-2">
                    <h2 class="text-lg md:text-2xl font-semibold">
                        {{ title }}
                    </h2>
                    <p class="md:text-xl font-light text-gray-200">
                        {{ description }}
                    </p>
                    <a href="" class="md:text-lg font-semibold">
                        Get now
                    </a>
                </div>
            </div>
        </div>
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
        className: {
            type: String,
            required: true
        }
    }
}
</script>