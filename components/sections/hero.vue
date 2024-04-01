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
                    <GetVisa/>
                    <div class="mt-8">
                        <OnlineRegis/>
                    </div>
                </div>
                <div class="mt-16 md:mt-0">
                    <Upload/>
                    <img src="/public/assets/image/hero-image.png" alt="Visa Exchange"
                        class="rounded-2xl shadow mt-6 w-[260px]">
                </div>
            </div>
        </div>
    </div>
</template>