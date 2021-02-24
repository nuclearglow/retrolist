export const login = async (nick, email) => {
    // TODO: check if it exists
    console.log(`Logging in with ${nick} (${email})`)

    // get the login challenge from the server
    const response = await fetch(`/auth/challenge/login/${nick}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const { publicKey: publicKeyCredentials } = await response.json()
        console.log({ publicKeyCredentials })
    }
}
