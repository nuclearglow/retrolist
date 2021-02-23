# TODO

## webauthn

explanation: https://medium.com/webauthnworks/introduction-to-webauthn-api-5fd1fb46c285

-   register with nick and email
    -   register needs to return the user's database id -> for creation of the list
    -   verify email before activating the account -> this allows for more devices
    -   hand out jsonwebtoken: https://blog.logrocket.com/jwt-authentication-in-rust/
    -   save jsonwebtoken locally
-   webauthn login with email
    -   hand out jsonwebtoken
        -   save jsonwebtoken locally
-   webauthn add device for activated user
-   add list and item stuff
    -   add jsonwebtoken
    -   verify jsonwebtoken

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
