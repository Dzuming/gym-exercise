import store from "react-native-simple-store";

export async function printAsyncStorage() {
        const keys = await store.keys()
    return keys.map(key => store.get(key).then(value => console.log(value)))
}

export async function clearAsyncStorage() {
    const keys = await store.keys()
    return keys.map(key => store.delete(key))
}
