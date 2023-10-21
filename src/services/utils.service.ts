// import { goto } from '$app/navigation';
// import { showConfirm } from '$services/alert.service';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const gen_random_uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
export const uuid_generate_v4 = gen_random_uuid;

