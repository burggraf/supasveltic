// import { goto } from '$app/navigation';
// import { showConfirm } from '$services/alert.service';
import { modalController } from '$ionic/svelte'

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const gen_random_uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
export const uuid_generate_v4 = gen_random_uuid;

export const openModal = async (theModal: any, theProps: any = {}, theOptions: any = {}) => {
  const obj: any = {
    component: theModal,
    componentProps: theProps,
    showBackdrop: true,
    backdropDismiss: true,
  };
  for (const key in theOptions) {
    obj[key] = theOptions[key];
  }
  console.log('obj', obj)
  const openLoginModalController = await modalController.create(obj)

  openLoginModalController.present();
  const { data } = await openLoginModalController.onWillDismiss();
  return data;
}
