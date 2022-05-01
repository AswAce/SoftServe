import { getAllObjectsFromDb } from '../js/service.js'
getAllObjectsController()


export async function getAllObjectsController() {

    let objects = await getAllObjectsFromDb();



    return await (objects)
}