 export async function getAllObjectsFromDb() {
     let address = `https://eu-api.backendless.com/B8CDF59D-A57F-C09D-FF37-16F12B14F200/5087962C-FC76-4524-AA4C-30FC38AF8823/data/crew_members`;

     let all = await fetch((address), {
         method: "GET",
         headers: {
             "Content-Type": "application/json",
         },
     }).then((e) => e.json());
     return Object.keys(all).map(key => ({ key, ...all[key] }));
 }