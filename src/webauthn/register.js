import { arrayToBase64, base64URLToArray } from './util'

// TODO: handle fetch errors https://dmitripavlutin.com/javascript-fetch-async-await/
// TODO: or use axios

/**
 * * the challenge PublicKeyCredentials are obtained from the backend
 * * using the propared PublicKeyCredentials, the Browser uses the Credentials Management API to obtain new credentials
 * * the credentials are prepared and then sent to the backend for checking and registering of the user
 *
 * @param {String} username the username to register with the backend using webauthn
 * @return {Object} credentials the user
 */
export const register = async (nick, email) => {
    // get the register challenge from the server
    const response = await fetch(`/auth/challenge/register/${nick}`, {
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
        publicKeyCredentials.challenge = base64URLToArray(publicKeyCredentials.challenge)
        const userId = publicKeyCredentials.user.id
        publicKeyCredentials.user.id = base64URLToArray(publicKeyCredentials.user.id)

        if (publicKeyCredentials.excludeCredentials) {
            publicKeyCredentials.excludeCredentials = publicKeyCredentials.excludeCredentials.map((ec) => {
                const obj = Object.assign({}, ec)
                obj.id = base64URLToArray(obj.id)
                return obj
            })
        }

        const newCredentials = await navigator.credentials.create({ publicKey: publicKeyCredentials })
        console.log({ newCredentials })

        const registerData = {
            // database user
            user: {
                nick,
                email
            },
            // Webauthn RegisterPublicKeyCredential
            credentials: {
                id: newCredentials.id,
                rawId: arrayToBase64(newCredentials.rawId),
                response: {
                    attestationObject: arrayToBase64(newCredentials.response.attestationObject),
                    clientDataJSON: arrayToBase64(newCredentials.response.clientDataJSON)
                },
                type: newCredentials.type
            }
        }

        // send the credentials to register
        const registerResponse = await fetch(`/auth/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })

        if (registerResponse.ok) {
            const id = await registerResponse.json()
            console.log(`Registration complete. Got backend user id: ${id}`)
            return {
                id,
                userId,
                credentialId: registerData.credentials.id,
                credentialRawId: registerData.credentials.rawId
            }
        }
    }
    console.log('Register failed!')
    return null
}
