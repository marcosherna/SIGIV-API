import requireDirectory from "require-directory"; 

export default function loadModule(path:string, extensions: string[], exclude?: RegExp) {

    return requireDirectory(module, path, {
        extensions,
        exclude
    });
}