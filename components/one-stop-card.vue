<template>
    <!-- the ":class" is containt classname from the caller file, it's for change the image-border color in the one-stop-card, because the cards are get different color styles -->
    <div class="relative w-full h-full p-4" :class="className">
        <div
            class="absolute top-[-1.3%] left-[-1.3%] bg-[#121212] w-[312px] md:w-[416px] h-[312px] md:h-[416px] rounded-xl z-20 text-white p-3">
            <div class="onestop-gradient w-full h-full">
                <div class="w-full flex justify-center pt-0 md:pt-4">
                    <!-- containt different image url from the caller file, because the cards have different image logo styles -->
                    <img :src="imageUrl" class="w-[388px] h-auto" alt="">
                </div>
                <div class="px-4 md:px-6 md:py-3 flex flex-col gap-2">
                    <h2 class="text-lg md:text-2xl font-semibold">
                        <!-- containt different title from the caller file for every cards -->
                        {{ title }}
                    </h2>
                    <p class="md:text-xl font-light text-gray-200">
                        <!-- containt different description from the caller file for every cards -->
                        {{ description }}
                    </p>
                    <a href="" class="md:text-lg font-semibold flex items-center gap-1 hover:opacity-80">
                        Get now
                        <svg viewBox="0 0 24 24" class="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        className: {
            type: String,
            required: true
        }
    }
}
</script>