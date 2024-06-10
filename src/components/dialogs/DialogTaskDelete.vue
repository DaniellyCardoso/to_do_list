<template>
    <div class="text-center pa-4">
        <v-dialog ref="dialog" tabindex="0" @keyup.esc="taskStore.toggleDelete" v-model="taskStore.showDialogTaskDelete" max-width="400" persistent>

            <v-card prepend-icon="mdi mdi-delete" title="Tem certeza que quer deletar?">
                <template v-slot:actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" variant="elevated" @click="taskStore.toggleDelete">Não</v-btn>

                    <v-btn color="red" variant="outlined" @click="taskStore.deleteTask">Sim</v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/task';

const taskStore = useTaskStore();

</script>