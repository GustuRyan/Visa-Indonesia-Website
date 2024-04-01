<template>
    <nav dir="ttb" class="sm:p-6 fixed z-[90] w-full h-auto">
        <div
            class="sm:rounded-xl bg-black w-full h-[68px] pl-4 pr-2 sm:pl-10 sm:pr-8 flex items-center justify-between">
            <div class="text-white text-2xl cursor-pointer">
                Visa Indonesia
            </div>
            <div class="hidden lg:flex">
                <ul class="flex items-center lg:gap-7 text-[#A0A0A0] lg:mr-7">
                    <li class="text-white hover:opacity-90 cursor-pointer"> Home </li>
                    <li class="relative">
                        <button @click="isOpen = !isOpen" class="group hover:text-white cursor-pointer flex items-center">
                            Visa Services
                            <svg class="w-4 h-4 ml-1 text-[#A0A0A0] group-hover:text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                                <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 15l7-7 7 7"></path>
                            </svg>
                        </button>
                        <div v-if="isOpen"
                            class="absolute top-[170%] w-[228px] bg-black text-white z-50 list-none divide-y divide-gray-100 rounded shadow overflow-hidden my-2"
                            id="dropdown">
                            <ul class="" aria-labelledby="dropdown">
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Visa Services 1</a>
                                </li>
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Visa Services 2
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="relative">
                        <button @click="isOpen2 = !isOpen2" class="group hover:text-white cursor-pointer flex items-center">
                            Extend Visa
                            <svg class="w-4 h-4 ml-1 text-[#A0A0A0] group-hover:text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path v-if="!isOpen2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                                <path v-if="isOpen2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 15l7-7 7 7"></path>
                            </svg>
                        </button>
                        <div v-if="isOpen2"
                            class="absolute top-[170%] w-[228px] bg-black text-white z-50 list-none divide-y divide-gray-100 rounded shadow overflow-hidden my-2"
                            id="dropdown">
                            <ul class="" aria-labelledby="dropdown">
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Extend Visa 1</a>
                                </li>
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Extend Visa 2
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="relative">
                        <button @click="isOpen3 = !isOpen3" class="group hover:text-white cursor-pointer flex items-center">
                            Information Center
                            <svg class="w-4 h-4 ml-1 text-[#A0A0A0] group-hover:text-white" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path v-if="!isOpen3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                                <path v-if="isOpen3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 15l7-7 7 7"></path>
                            </svg>
                        </button>
                        <div v-if="isOpen3"
                            class="absolute top-[170%] w-[228px] bg-black text-white z-50 list-none divide-y divide-gray-100 rounded shadow overflow-hidden my-2"
                            id="dropdown">
                            <ul class="" aria-labelledby="dropdown">
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Information Center 1</a>
                                </li>
                                <li>
                                    <a href="#" class="text-md hover:bg-gray-700 text-white block px-3 py-2">Information Center 2
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="hover:text-white cursor-pointer"> About Us </li>
                </ul>
                <button
                    class="flex items-center bg-white p-2 rounded-lg font-bold text-sm hover:bg-[#01D06D] hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z">
                            </path>
                        </g>
                    </svg>
                    <span>
                        MY ACCOUNT
                    </span>
                </button>
            </div>
            <button class="lg:hidden block text-white rounded-full hover:bg-slate-700 p-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6H20M4 12H20M4 18H20" />
                </svg>
            </button>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
            isOpen2: false,
            isOpen3: false
        }
    }
}
</script>