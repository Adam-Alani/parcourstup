import { writable} from "svelte/store";


//==========Date variables==============//

export let schools = writable<string[]>([]) ;
export let averages = writable<{[key: string]: number}>({});
