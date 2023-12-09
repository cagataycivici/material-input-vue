<template>
    <div
        class="min-h-screen bg-white dark:bg-surface-900 p-8 flex items-center justify-center transition-colors duration-200">
        <div class="fixed w-full top-0 left-0 flex items-center justify-end gap-3 p-8">
            <DarkToggle />
            <ColorPalette />
        </div>

        <div class="flex gap-4">
            <span class="relative">
                <InputText id="username1" autocomplete="off" class="peer" placeholder="" />
                <label for="username1"
                    class="bg-white dark:bg-surface-900 px-2 absolute text-sm text-primary-500 dark:text-primary-400/60 duration-300 transform -translate-y-6 text-primary-500 dark:text-primary-400 -scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-surface-500 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-primary-500">Username</label>
            </span>

            <span class="relative">
                <InputText id="username2" autocomplete="off" class="peer" placeholder="" mode="filled" />
                <label for="username2"
                    class="absolute text-sm text-primary-500 dark:text-primary-400/60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username</label>
            </span>
        </div>
    </div>
</template>

<script setup>
import DarkToggle from './components/DarkToggle.vue';
import ColorPalette from './components/ColorPalette.vue';
</script>