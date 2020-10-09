<template>
    <div class="h-screen flex w-full bg-img">
        <div class="mx-auto text-center">
            <img :src="static/images/not-authorized.png" alt="graphic-not-authorized" class="mx-auto mb-4">
            <h1 class="mb-8 text-5xl d-theme-heading-color">You are not authorized!</h1>
            <p class="mb-8 d-theme-text-inverse">Not allowed</p>
            <vs-button size="large" to="/">Back to Home</vs-button>
        </div>
    </div>
</template>
