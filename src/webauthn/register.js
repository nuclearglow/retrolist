import { arrayToBase64, base64ToArray } from './util'

// TODO: handle fetch errors https://dmitripavlutin.com/javascript-fetch-async-await/
// TODO: or use axios

export const register = async (username) => {
    // get the register challenge from the server
    const response = await fetch(`/auth/challenge/register/${username}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const { publicKey: publicKeyCredentials } = await response.json()
        console.log({ publicKeyCredentials })

        // post-process credentials for browser usage
        publicKeyCredentials.challenge = base64ToArray(publicKeyCredentials.challenge)
        const userId = base64ToArray(publicKeyCredentials.user.id)

        if (publicKeyCredentials.excludeCredentials) {
            publicKeyCredentials.excludeCredentials = publicKeyCredentials.excludeCredentials.map((ec) => {
                const obj = Object.assign({}, ec)
                obj.id = base64ToArray(obj.id)
                return obj
            })
        }

        const newCredentials = await navigator.credentials.create({ publicKey: publicKeyCredentials })
        console.log({ newCredentials })

        const registerData = {
            id: newCredentials.id,
            rawId: arrayToBase64(newCredentials.rawId),
            response: {
                attestationObject: arrayToBase64(newCredentials.response.attestationObject),
                clientDataJSON: arrayToBase64(newCredentials.response.clientDataJSON)
            },
            type: newCredentials.type
        }

        // send the credentials to register
        const registerResponse = await fetch(`/auth/register/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: registerData
        })

        if (registerResponse.ok) {
            console.log('Register complete!')
            return {
                userId,
                id: newCredentials.id,
                rawId: registerData.rawId
            }
        }
    }
    console.log('Register failed!')
    return null
}
