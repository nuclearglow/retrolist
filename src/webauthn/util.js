// encode the string as base64 - and then encode to UInt8Array
// RFC4648 details Base64URL: https://tools.ietf.org/html/rfc4648#page-7
export const base64URLToArray = (str) => {
    // Replace non-url compatible chars with base64 standard chars
    str = str.replace(/-/g, '+').replace(/_/g, '/')
    // Pad out with standard base64 required padding characters
    let padding = str.length % 4
    if (padding) {
        if (padding === 1) {
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')
        }
        str += new Array(5 - padding).join('=')
    }
    // decode and turn into UInt8 Array
    return Uint8Array.from(
        atob(str)
            .split('')
            .map((c) => {
                return c.charCodeAt(0)
            })
    )
}

// encode raw binary to string, and then to base64
export const arrayToBase64 = (binary) => {
    return btoa(new Uint8Array(binary).reduce((s, byte) => s + String.fromCharCode(byte), ''))
}
