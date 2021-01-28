import { writable} from "svelte/store";



//==========Date variables==============//

export let schools = writable<object[]>([]) ;
export let averages = writable<{[key: string]: number}>({});
export let totalAverage = writable<number>(0);
