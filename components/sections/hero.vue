<template>
    <div class="w-full h-screen bg-slate-100 flex justify-center background-section">
        <div class="lg:flex flex-col lg:flex-row items-center justify-center w-[80%] h-full lg:gap-12 pt-[180px] lg:pt-[60px]">
            <div class="grid grid-col gap-8 w-auto text-center lg:text-left">
                <span class="ubuntu-font text-4xl">
                    Visa application made simple, apply now!
                </span>
                <p class="">
                    Say goodbye to cumbersome paperwork and endless queues, and say hello to a hassle-free travel
                    experience
                </p>
                <div class="flex justify-center lg:justify-start items-center">
                    <button class="bg-black text-white text-sm rounded-lg border-black border-2 py-2 px-4 mr-2">
                        GET VISA NOW
                    </button>
                    or
                    <button class="rounded-lg border-black text-sm border-2 py-2 px-4 ml-2">
                        EXTEND MY VISA
                    </button>
                </div>
            </div>
            <div class="flex-col flex md:flex md:flex-row items-center lg:items-end justify-center md:justify-between gap-12 mt-32 md:mt-36 lg:mt-24"> 
                <div>
                    <div class="relative bg-white w-[260px] h-auto p-4 rounded-2xl shadow">
                        <div
                            class="rounded-full w-[100px] h-[100px] bg-[#01D06D] flex justify-center items-center absolute top-[25%] translate-y-[-100%] left-0 right-0 m-auto">
                            check
                        </div>
                        <p class="text-center mt-12 text-sm">
                            Your visa is already finish, make appointment to get it in our office. Thank you for using
                            our services
                        </p>
                        <button
                            class="bg-black text-white border-black border-2 rounded-full px-2 py-1 mt-6 w-full text-xs">
                            Make Appointment Now
                        </button>
                    </div>
                    <div class="bg-white w-[260px] h-auto rounded-2xl shadow mt-8 pt-5 pb-8 pl-4">
                        <div class="wrapper w-full overflow-x-scroll overflow-y-hidden flex items-center font-bold">
                            <section class="flex items-center w-full text-xs whitespace-nowrap cursor-pointer">
                                <span class="rounded-full w-[24px] h-[24px] bg-[#0077D6] flex
                                justify-center items-center text-white mr-2">1</span>
                                Visa Information
                            </section>
                            <div class="w-[60px] h-[1px] bg-[#D2D2D2] mx-2">
                                <span class="invisible">____</span>
                            </div>
                            <section class="flex
                                 items-center w-full text-xs whitespace-nowrap cursor-pointer group mr-4">
                                <span class="rounded-full w-[24px] h-[24px] bg-[#D2D2D2] group-hover:bg-[#0077D6] flex
                                justify-center items-center text-white mr-2">2</span>
                                User Information
                            </section>
                        </div>
                        <form action="" class="pr-4">
                            <div class="w-full">
                                <span class="text-[#344054]">
                                    Services
                                </span>
                                <input type="text"
                                    class="border-2 border-slate-300 rounded-lg px-2 py-1 w-full shadow mt-1 " id=""
                                    aria-describedby="createNewTitle" placeholder="New Visa">
                            </div>
                            <button @click="isOpen = !isOpen"
                                class="w-full bg-white shadow border-2 border-slate-300 rounded-lg text-md px-2 py-1 text-center inline-flex items-center mt-4 justify-between"
                                type="button" data-dropdown-toggle="dropdown">
                                Filter
                                <svg class="w-4 h-4 ml-2 text-slate-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                    <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 15l7-7 7 7"></path>
                                </svg>
                            </button>
                            <div v-if="isOpen"
                                class="absolute w-[248px] bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-2"
                                id="dropdown">
                                <ul class="" aria-labelledby="dropdown">
                                    <li>
                                        <a href="#"
                                            class="text-md hover:bg-gray-100 text-gray-700 block px-3 py-2">B211A
                                            Visa</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="text-md hover:bg-gray-100 text-gray-700 block px-3 py-2">E-Visa on
                                            Arrival
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mt-16 md:mt-0">
                    <div class="relative bg-white w-[260px] h-auto px-4 pt-4 pb-8 rounded-2xl shadow">
                        <div
                            class="docs-border w-[100px] h-[100px] bg-white shadow flex justify-center items-center absolute top-[25%] translate-y-[-100%] left-0 right-0 m-auto">
                            <span class="text-xs text-[#0077D6]">passport.pdf</span>
                        </div>
                        <div class="flex justify-center">
                            <button
                                class="bg-black text-white border-black border-2 rounded-full w-[200px] py-1 mt-16 w-full text-xs">
                                Upload New Document
                            </button>
                        </div>
                        <div class="loading-bar mt-8 rounded-full">
                            <div class="loading-progress rounded-full"></div>
                        </div>
                        <div class="flex justify-between text-center mt-3 text-sm text-sm">
                            <span>Uploading ...</span>
                            <span>75%</span>
                        </div>
                    </div>
                    <img src="/public/assets/image/hero-image.png" alt="Visa Exchange" class="rounded-2xl shadow mt-6 w-[260px]">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    }
}
</script>