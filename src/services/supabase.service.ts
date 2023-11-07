import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { decrypt_item } from '$services/utils.service';
import type { Database } from '../models/schema';
export const supabase: SupabaseClient<Database> = createClient(decrypt_item(0), decrypt_item(1));

// export const add_item_to_list = async (name: string, type: string, item: any) => {
//     let id: string = '';
//     if (item?.id) { id = item.id } else { id = item };
//     const { data, error } = await supabase
//         .rpc('add_item_to_list', { listname: name, listtype: type, item_id: id })
//     if (error) {
//         console.error('add_item_to_list error: ', error)
//     } else {
//         // console.log('add_item_to_list data:', data)
//     }
//     return data
// }
// export const remove_item_from_list = async (name: string, type: string, item: any) => {
//     let id: string = '';
//     if (item?.id) { id = item.id } else { id = item };
//     const { data, error } = await supabase
//         .rpc('remove_item_from_list', { listname: name, listtype: type, item_id: id })
//     if (error) {
//         console.error('remove_item_from_list error: ', error)
//     } else {
//         // console.log('remove_item_from_list data:', data)
//     }
//     return data
// }
// export const is_item_in_list = async (name: string, type: string, item: any) => {
//     let id: string = '';
//     if (item?.id) { id = item.id } else { id = item };
//     const { data, error } = await supabase
//         .rpc('is_item_in_list', { listname: name, listtype: type, item_id: id })
//     if (error) {
//         console.error('is_item_in_list error: ', error)
//     } else {
//         // console.log('is_item_in_list data:', data, typeof data)
//     }
//     return data;
// }