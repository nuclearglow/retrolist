// string to ByteArray, but we first encode the string as base64 - note the use of the atob() function
export const stringToBinary = (str) => {
    return Uint8Array.from(atob(str), (c) => c.charCodeAt(0))
}

// encode raw binary to string, and then to base64
export const binaryToString = (binary) => {
    return btoa(new Uint8Array(binary).reduce((s, byte) => s + String.fromCharCode(byte), ''))
}

// TODO: move the webauthn logic here
