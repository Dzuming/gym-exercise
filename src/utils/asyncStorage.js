import store from "react-native-simple-store";
import {guid} from "./uuid";

export async function printAsyncStorage() {
        const keys = await store.keys()
    return keys.map(key => store.get(key).then(value => console.log(value)))
}

export async function clearAsyncStorage() {
    const keys = await store.keys()
    return keys.map(key => store.delete(key))
}

export function getBodyParts() {
    return store.get("bodyParts")
}


export function createBodyPart(name) {
    return store
        .push("bodyParts", {
            id: guid(),
            name
        })
}