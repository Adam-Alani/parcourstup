import { writable} from "svelte/store";



//==========Date variables==============//

export let schools = writable<object[]>([]) ;
export let averages = writable<{[key: string]: number}>({});
export let totalAverage = writable<number>(0);
export let exams = writable<string[]>(["EC","Bulletin","Francais Ecrit","Francais Oral","Spe 1",
                                                "Spe 2", "Philo", "Grand Oral"])


//=================  Policies/ Mentions/ dont sue me pls ===============//
export let footer = writable("Les resultats de ce site doivent etre pris a la legere. Ces resultats " +
    "nimpliquent en aucun cas une admission (ou pas) dans une formation. " +
    "Elles sont la pour vous guider dans la creation d'une liste d'ecoles et " +
    "pour vous aider a visualiser plus ou moins votre chance d'etre accepte/" +
    "votre position par rapport aux autres candidats. L'admission peut dependre sur la qualite de votre lettre de motivation , votre dossier scolaire ou les appreciations des profs")

