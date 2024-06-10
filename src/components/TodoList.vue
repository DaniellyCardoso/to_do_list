<template>
   <v-text-field clearable label="Adicionar Tarefa" v-model="taskStore.titleTaskCreating"
      @keyup.enter="taskStore.addTask" :rules="rules">
   </v-text-field>

   <ListTasks></ListTasks>
</template>

<script setup>
import { onMounted } from 'vue';
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
const rules = [
   value => {
      if (!value || value.length >= 5) return true;
      return "Você tem que digitar algo com pelo menos 5 caracteres!"
   },
];

onMounted(() => {
   taskStore.getTasks();
})

</script>