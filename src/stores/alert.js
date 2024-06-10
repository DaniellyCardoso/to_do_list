// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert:false,
    type:"error",
    text:"Deletado com sucesso!"
  }),
  actions:{
    notfyAlert(){
        this.showAlert = true;
        setTimeout(()=>{
            this.showAlert = false;
        }, 3000)
    },
    notfyAlertCreating(){
      this.type = "success";
      this.text = "Tarefa criada com sucesso!";
      this.notfyAlert();
    },
    notfyAlertDeleted(){
      this.type = "warning";
      this.text = "Tarefa deletada!";
      this.notfyAlert();
    },
    notfyAlertUpdated(){
      this.type = "info";
      this.text = "Tarefa Editada e salva com sucesso!";
      this.notfyAlert();
    }
  }
})
