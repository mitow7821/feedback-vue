<template>
  <div
    class="bg-sky-900 rounded-md p-5 flex justify-between items-center gap-5 text-white"
  >
    <div>
      <button @click="$router.go(-1)">&lt; Go Back</button>

      <h1 class="font-semibold text-xl">Roadmap</h1>
    </div>

    <router-link to="/feedback/add" class="button | bg-purple-600 ml-auto"
      >+ Add Feedback
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>
