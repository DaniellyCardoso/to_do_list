<template>
    <Alert v-if="alertStore.showAlert" />
    <TodoList />
</template>

<script setup>
    import TodoList from '@/components/TodoList.vue'
    import Alert from '@/components/shared/Alert.vue'
    import { useAlertStore } from '@/stores/alert';

    const alertStore = useAlertStore(); 
</script>