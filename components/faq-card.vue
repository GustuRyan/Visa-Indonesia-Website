<template>
    <div :class="{ 'bg-white pb-2': !isOpen, 'bg-gray-100 pb-6': isOpen }" class="flex flex-col px-6 pt-2 xl:w-[740px] h-auto rounded-xl hover:border-2">
        <!-- if the user click on this component it'll set the isOpen variable to opposite value (true -> false | false -> true), and this function will trigger the dropdown to go up or down -->
        <div @click="isOpen = !isOpen"  class="flex justify-between items-center  cursor-pointer">
            <span class="font-bold w-[440px] h-[48px] flex items-center">
                <!-- containt different title from the caller file for every cards -->
                {{ title }}
            </span>
            <div class="flex flex-row">
                <!-- condition if the variable is true, it'll show the icon below -->
                <svg v-if="isOpen" fill="#000000" viewBox="0 0 32 32" class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>minus-round</title>
                        <path
                            d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM8 16q0 0.832 0.576 1.44t1.44 0.576h12q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-12q-0.832 0-1.44 0.576t-0.576 1.408z">
                        </path>
                    </g>
                </svg>
                <!-- condition if the variable is false, it'll show the icon below -->
                <svg v-if="!isOpen" fill="#000000" viewBox="0 0 32 32" class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>round-plus</title>
                        <path
                            d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM8 16q0 0.832 0.576 1.44t1.44 0.576h4v4q0 0.832 0.576 1.408t1.408 0.576 1.408-0.576 0.608-1.408v-4h4q0.8 0 1.408-0.576t0.576-1.44-0.576-1.408-1.408-0.576h-4v-4q0-0.832-0.608-1.408t-1.408-0.608-1.408 0.608-0.576 1.408v4h-4q-0.832 0-1.44 0.576t-0.576 1.408z">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
        <!-- condition if the variable is true, it'll show the dropdown -->
        <div v-if="isOpen" class="flex flex-col mt-6 leading-7">
            <span>
                1. You want to stay in Indonesia for more than 60 days
            </span>
            <span>
                2. You don't know how long you want to stay and you want to keep the option open for longer than 60 days
                without having to leave the country
            </span>
            <span>
                3. After the visa you want to you apply for a KITAS (investor, marriage, pension)
            </span>
            <span>
                4. Your reason for entering the country is not for tourism purposes (e g volunteer work. internship,
                further education etc)
            </span>
            <span>
                5. You stay longer than 30 days and travel a lot and can Not coming to the Immigration Office for the
                extension (personal appearance important)
            </span>
            <span>
                6. You only have a temporary passport and want to enter Indonesia
            </span>
            <span>
                7. It is uncertain whether the Visa On Arrival will be granted due to your vaccination status or other
                formalities and you want to be on the safe side
            </span>
        </div>
    </div>
</template>
<script>
export default {
    // this is a variable to conditioning the dropdown state are true (active) or false (inactive)
    data() {
        return {
            isOpen: false
        }
    },
    // the variables to accomodate value from array variables on the caller file
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>