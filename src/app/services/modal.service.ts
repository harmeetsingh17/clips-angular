import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
 private modals: Imodal[] = []
  
  constructor() { }

  isModalOpen(id:string):boolean{
    return !!this.modals.find(el => el.id === id)?.visible
  }

  unregister(id:string){
    this.modals = this.modals.filter(el => el.id !== id)
  }

  register(id:string){
    this.modals.push({
      id,
      visible:false
    })
  }

  toggleModal(id:string){
    const modal = this.modals.find(el => el.id === id)
   if (modal) {
    modal.visible = !modal.visible
   }
  }

}
