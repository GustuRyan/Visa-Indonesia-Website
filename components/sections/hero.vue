<template>
    <div class="w-full h-auto lg:h-screen bg-slate-100 flex justify-center background-section">
        <div
            class="lg:flex flex-col lg:flex-row items-center justify-center w-[80%] h-full lg:gap-12 pt-[180px] lg:pt-[60px] mb-20">
            <div class="grid grid-col gap-8 w-auto text-center lg:text-left">
                <span class="ubuntu-font text-4xl">
                    Visa application made simple, apply now!
                </span>
                <p class="">
                    Say goodbye to cumbersome paperwork and endless queues, and say hello to a hassle-free travel
                    experience
                </p>
                <div class="flex justify-center lg:justify-start items-center">
                    <button
                        class="bg-black text-white text-sm rounded-lg border-black border-2 py-2 px-4 mr-2 hover:bg-white hover:text-black hover:font-bold">
                        GET VISA NOW
                    </button>
                    or
                    <button
                        class="rounded-lg border-black text-sm border-2 py-2 px-4 ml-2 hover:bg-black hover:text-white hover:font-bold">
                        EXTEND MY VISA
                    </button>
                </div>
            </div>
            <div
                class="flex-col flex md:flex md:flex-row items-center lg:items-end justify-center md:justify-between gap-12 mt-32 md:mt-36 lg:mt-24">
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
                            class="bg-black text-white border-black border-2 rounded-full px-2 py-2 mt-6 w-full text-xs flex justify-center hover:bg-[#01D06D] hover:border-white hover:border-1">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                                class="w-4 h-4 mr-2">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                                        stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path>
                                </g>
                            </svg>
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
                                <span class="text-[#344054] text-xs">
                                    Services
                                </span>
                                <input type="text"
                                    class="border-2 border-slate-300 rounded-lg px-2 py-1 w-full shadow mt-1 focus:outline focus:outline-gray-200 focus:border-slate-300" id=""
                                    aria-describedby="createNewTitle" placeholder="New Visa">
                            </div>
                            <button @click="isOpen = !isOpen"
                                class="w-full bg-white shadow border-2 border-slate-300 rounded-lg text-md px-2 py-1 text-center inline-flex items-center mt-4 justify-between focus:outline focus:outline-gray-200"
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
                                class="absolute w-[228px] bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-2 overflow-hidden"
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
                            class="docs-border w-[100px] h-[100px] bg-white shadow flex flex-col justify-center items-center absolute top-[25%] translate-y-[-100%] left-0 right-0 m-auto">
                            <svg fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" mlns="http://www.w3.org/2000/svg" class="h-16"
                                transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)" stroke="#000000"
                                stroke-width="0.00024000000000000003">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M20,6.52897986 L20,19.5010024 C20,20.8817143 18.8807119,22.0010024 17.5,22.0010024 L6.5,22.0010024 C5.11928813,22.0010024 4,20.8817143 4,19.5010024 L4,4.50100238 C4,3.1202905 5.11928813,2.00100238 6.5,2.00100238 L15.4720225,2.00100238 C15.6047688,1.99258291 15.7429463,2.03684187 15.8535534,2.14744899 L19.8535534,6.14744899 C19.9641605,6.25805611 20.0084195,6.39623363 20,6.52897986 Z M15,3.00100238 L6.5,3.00100238 C5.67157288,3.00100238 5,3.67257525 5,4.50100238 L5,19.5010024 C5,20.3294295 5.67157288,21.0010024 6.5,21.0010024 L17.5,21.0010024 C18.3284271,21.0010024 19,20.3294295 19,19.5010024 L19,7.00100238 L15.5,7.00100238 C15.2238576,7.00100238 15,6.77714475 15,6.50100238 L15,3.00100238 Z M16,3.70810916 L16,6.00100238 L18.2928932,6.00100238 L16,3.70810916 Z M12,10.7071068 L12,17.5 C12,17.7761424 11.7761424,18 11.5,18 C11.2238576,18 11,17.7761424 11,17.5 L11,10.7071068 L8.85355339,12.8535534 C8.65829124,13.0488155 8.34170876,13.0488155 8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 L11.1464466,9.14644661 C11.3417088,8.95118446 11.6582912,8.95118446 11.8535534,9.14644661 L14.8535534,12.1464466 C15.0488155,12.3417088 15.0488155,12.6582912 14.8535534,12.8535534 C14.6582912,13.0488155 14.3417088,13.0488155 14.1464466,12.8535534 L12,10.7071068 Z">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-xs text-[#0077D6]">passport.pdf</span>
                        </div>
                        <div class="flex justify-center">
                            <button
                                class="bg-black text-white border-black border-2 rounded-full w-[180px] py-2 px-2 mt-16 w-full text-xs flex justify-center hover:bg-[#01D06D] hover:border-white hover:border-1">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 mr-2">
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z"
                                            fill="#fff"></path>
                                        <path
                                            d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                                            fill="#fff"></path>
                                    </g>
                                </svg>
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
                    <img src="/public/assets/image/hero-image.png" alt="Visa Exchange"
                        class="rounded-2xl shadow mt-6 w-[260px]">
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