<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogTaskFields" min-width="400" max-width="600" persistent>
      <!--<template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps">
            Open Dialog
          </v-btn>
        </template>-->

      <v-card prepend-icon="mdi mdi-notebook-edit" title="Editar Tarefa">
        <v-text-field v-model="props.task.title" label="Título" />
        <v-text-field v-model="props.task.description" label="Descrição" />
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn color="green-darken-1" variant="elevated" @click="taskStore.updateTask()">
            Salvar
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();
const props = defineProps({
  task: Object
})
</script>