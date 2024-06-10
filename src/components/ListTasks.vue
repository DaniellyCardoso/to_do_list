<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>Tarefas</v-list-subheader>

            <v-list-item 
            v-for="(task, index) in taskStore.tasks" 
            :key="index"
             :value="index"
             @click="taskStore.toggleDoneTask(index)">

                <template v-slot:prepend="{  }">

                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <v-list-item-title>{{ task.title }}</v-list-item-title>

                <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="white" icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="taskStore.toggleEdit(index)" value="1">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="taskStore.toggleDelete(index)" value="2">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </v-list>
        <DialogTaskFields
          :task="taskStore.tasks[taskStore.indexTaskSelected]">
        </DialogTaskFields>
        
        <DialogTaskDelete />
    </div>
</template>

<script setup>

import DialogTaskFields from "@/components/dialogs/DialogTaskFields.vue";
import DialogTaskDelete from "@/components/dialogs/DialogTaskDelete.vue";
import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();


</script>