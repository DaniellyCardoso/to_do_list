<template>
    <div class="alert-notfication">
        <v-alert closable :type="alertStore.type" :title="alertStore.text" type="success">
        </v-alert>
    </div>
</template>

<script setup>

import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore();

</script>

<style scoped>
.alert-notfication {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 35% 0 35%;
}
</style>