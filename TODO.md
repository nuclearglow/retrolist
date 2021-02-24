# TODO

## webauthn

explanation: https://medium.com/webauthnworks/introduction-to-webauthn-api-5fd1fb46c285

-   register with nick and email
    -   hand out jsonwebtoken: https://blog.logrocket.com/jwt-authentication-in-rust/
    -   save jsonwebtoken locally
-   webauthn login
    -   hand out jsonwebtoken
        -   save jsonwebtoken locally

fetch("http://localhost:8080/auth/challenge/login/nuky", {
"headers": {
"accept": "_/_",
"accept-language": "en-US,en;q=0.9",
"cache-control": "no-cache",
"pragma": "no-cache",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"sec-gpc": "1"
},
"referrer": "http://localhost:8080/auth",
"referrerPolicy": "strict-origin-when-cross-origin",
"body": null,
"method": "POST",
"mode": "cors",
"credentials": "include"
});
response:
{
"challenge": "AR_2bJ6HzCbFrsUN3FZ4II7GwO6arxysJwQ01JYXAmc",
"timeout": 60000,
"rpId": "localhost",
"allowCredentials": [
{
"type": "public-key",
"id": "B-hZgCaJyUh2s8pLht36GBAhvJWtEVu6b9erhaQp1GfHXGzCM9dOxk3U9J2d-brGF4GmdUryV8cVZJdikxFXCg"
}
],
"userVerification": "discouraged",
"extensions": null
}

-   add list and item stuff

    -   add jsonwebtoken
    -   verify jsonwebtoken

-   synchronization state:
    when logged in, do a synchronization first
    overwrite local state

-   webauthn add device only for activated user
    -   verify email before activating the account -> this allows for more devices

## error handling

-   error messages
    offline:
    504 (Gateway Timeout)

## offline mode

-   offline mode
    if post / put error occurs
    state dirty
    when online again, fire synchronize
    get from server, do the diff ?
    do the necessary updates ?
    or just update everything to the server flat...

## status indicator

-   status indicator bar
    prop: type, message
    icon by type + message
    types: success, sync, warn, error

## settings

## action mode

    add done field
    update items to be done
        update rendering
