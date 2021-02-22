// encode the string as base64 - and then encode to UInt8Array
export const base64ToArray = (str) => {
    console.log(`base64 decode: ${str}`)

    return Uint8Array.from(
        decodeURIComponent(
            escape(
                atob(str)
                    .split('')
                    .map((c) => {
                        return c.charCodeAt(0)
                    })
            )
        )
    )
}

// encode raw binary to string, and then to base64
export const arrayToBase64 = (binary) => {
    return btoa(
        unescape(encodeURIComponent(new Uint8Array(binary).reduce((s, byte) => s + String.fromCharCode(byte), '')))
    )
}
