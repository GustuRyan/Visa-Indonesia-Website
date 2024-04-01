<template>
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
                    class="border-2 border-slate-300 rounded-lg px-2 py-1 w-full shadow mt-1 focus:outline focus:outline-gray-200 focus:border-slate-300"
                    id="" aria-describedby="createNewTitle" placeholder="New Visa">
            </div>
            <button @click="isOpen = !isOpen"
                class="w-full bg-white shadow border-2 border-slate-300 rounded-lg text-md px-2 py-1 text-center inline-flex items-center mt-4 justify-between focus:outline focus:outline-gray-200"
                type="button" data-dropdown-toggle="dropdown">
                Filter
                <svg class="w-4 h-4 ml-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
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
                        <a href="#" class="text-md hover:bg-gray-100 text-gray-700 block px-3 py-2">B211A
                            Visa</a>
                    </li>
                    <li>
                        <a href="#" class="text-md hover:bg-gray-100 text-gray-700 block px-3 py-2">E-Visa on
                            Arrival
                        </a>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>