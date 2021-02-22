# TODO

## webauthn

explanation: https://medium.com/webauthnworks/introduction-to-webauthn-api-5fd1fb46c285

protocol steps

1.  register challenge
    fetch("http://localhost:8080/auth/challenge/register/glglgl", {
    "headers": {
    "accept": "_/_",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
    },
    "referrer": "http://localhost:8080/auth",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    });

          response
              {"publicKey":{"rp":{"name":"localhost","id":"localhost"},"user":{"id":"Z2xnbGds","name":"glglgl","displayName":"glglgl"},"challenge":"feuTvtalieYJCLjHSUlcHXD_DqvMvdJHPyb7EXN9D9w","pubKeyCredParams":[{"type":"public-key","alg":-7},{"type":"public-key","alg":-35},{"type":"public-key","alg":-36},{"type":"public-key","alg":-257},{"type":"public-key","alg":-258},{"type":"public-key","alg":-259},{"type":"public-key","alg":-37},{"type":"public-key","alg":-38},{"type":"public-key","alg":-39},{"type":"public-key","alg":-8}],"timeout":60000,"attestation":"direct","authenticatorSelection":{"requireResidentKey":false,"userVerification":"discouraged"}}}

2.  register

fetch("http://localhost:8080/auth/register/argl", {
"headers": {
"accept": "_/_",
"accept-language": "en-US,en;q=0.9",
"sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
"sec-ch-ua-mobile": "?0",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin"
},
"referrer": "http://localhost:8080/auth",
"referrerPolicy": "strict-origin-when-cross-origin",
"body": "{\"id\":\"elSa9-AkHubyumB6Y9oLlzdHgL0nYtQN6v8SfILzEDs\",\"rawId\":\"elSa9-AkHubyumB6Y9oLlzdHgL0nYtQN6v8SfILzEDs\",\"response\":{\"attestationObject\":\"o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEYwRAIgTyoBWUtHEV02VQrXM9Zy5nWwUQun_I3XXr78hBBrQFYCIDs3QwMogDKaKvLSyGgUmlqOCmBvd92e2HIfgx1lpfLIY3g1Y4FZAeIwggHeMIIBgKADAgECAgEBMA0GCSqGSIb3DQEBCwUAMGAxCzAJBgNVBAYTAlVTMREwDwYDVQQKDAhDaHJvbWl1bTEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEaMBgGA1UEAwwRQmF0Y2ggQ2VydGlmaWNhdGUwHhcNMTcwNzE0MDI0MDAwWhcNNDEwMjE0MjIzNjAyWjBgMQswCQYDVQQGEwJVUzERMA8GA1UECgwIQ2hyb21pdW0xIjAgBgNVBAsMGUF1dGhlbnRpY2F0b3IgQXR0ZXN0YXRpb24xGjAYBgNVBAMMEUJhdGNoIENlcnRpZmljYXRlMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEjWF-ZclQjmS8xWc6yCpnmdo8FEZoLCWMRj\_\_31jf0vo-bDeLU9eVxKTf-0GZ7deGLyOrrwIDtLiRG6BWmZThAaMoMCYwEwYLKwYBBAGC5RwCAQEEBAMCBSAwDwYDVR0TAQH_BAUwAwEBADANBgkqhkiG9w0BAQsFAANJADBGAiEAsejFOruh4yZUxudlzeyPhhkC05NrdEb65e3Yegui0HkCIQCMZ66tiF08sMkWXTh8-34LXFe8aeyKf7lF6mXB3ZdurmhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NBAAAAAQECAwQFBgcIAQIDBAUGBwgAIHpUmvfgJB7m8rpgemPaC5c3R4C9J2LUDer_EnyC8xA7pQECAyYgASFYIAaEmNepErvivZmXKnzkXZMvt5bhqPqmoRjL5Wdy1SslIlggXkKANdTKMIrMdhNrBd6UxYHfiyqVAV0GHWJ8MqgR1Do\",\"clientDataJSON\":\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoicjJTMzFmNTZ3OHR5bDZWWUYzU19aUTNNcm53SnJaWk4xRUJiejlRckpTSSIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImNyb3NzT3JpZ2luIjpmYWxzZX0\"},\"type\":\"public-key\"}",
"method": "POST",
"mode": "cors",
"credentials": "include"
});

body:
{"id":"elSa9-AkHubyumB6Y9oLlzdHgL0nYtQN6v8SfILzEDs","rawId":"elSa9-AkHubyumB6Y9oLlzdHgL0nYtQN6v8SfILzEDs","response":{"attestationObject":"o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEYwRAIgTyoBWUtHEV02VQrXM9Zy5nWwUQun_I3XXr78hBBrQFYCIDs3QwMogDKaKvLSyGgUmlqOCmBvd92e2HIfgx1lpfLIY3g1Y4FZAeIwggHeMIIBgKADAgECAgEBMA0GCSqGSIb3DQEBCwUAMGAxCzAJBgNVBAYTAlVTMREwDwYDVQQKDAhDaHJvbWl1bTEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEaMBgGA1UEAwwRQmF0Y2ggQ2VydGlmaWNhdGUwHhcNMTcwNzE0MDI0MDAwWhcNNDEwMjE0MjIzNjAyWjBgMQswCQYDVQQGEwJVUzERMA8GA1UECgwIQ2hyb21pdW0xIjAgBgNVBAsMGUF1dGhlbnRpY2F0b3IgQXR0ZXN0YXRpb24xGjAYBgNVBAMMEUJhdGNoIENlcnRpZmljYXRlMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEjWF-ZclQjmS8xWc6yCpnmdo8FEZoLCWMRj\_\_31jf0vo-bDeLU9eVxKTf-0GZ7deGLyOrrwIDtLiRG6BWmZThAaMoMCYwEwYLKwYBBAGC5RwCAQEEBAMCBSAwDwYDVR0TAQH_BAUwAwEBADANBgkqhkiG9w0BAQsFAANJADBGAiEAsejFOruh4yZUxudlzeyPhhkC05NrdEb65e3Yegui0HkCIQCMZ66tiF08sMkWXTh8-34LXFe8aeyKf7lF6mXB3ZdurmhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NBAAAAAQECAwQFBgcIAQIDBAUGBwgAIHpUmvfgJB7m8rpgemPaC5c3R4C9J2LUDer_EnyC8xA7pQECAyYgASFYIAaEmNepErvivZmXKnzkXZMvt5bhqPqmoRjL5Wdy1SslIlggXkKANdTKMIrMdhNrBd6UxYHfiyqVAV0GHWJ8MqgR1Do","clientDataJSON":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoicjJTMzFmNTZ3OHR5bDZWWUYzU19aUTNNcm53SnJaWk4xRUJiejlRckpTSSIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImNyb3NzT3JpZ2luIjpmYWxzZX0"},"type":"public-key"}

    login

-   error messages
    offline:
    504 (Gateway Timeout)

-   offline mode
    if post / put error occurs
    state dirty
    when online again, fire synchronize
    get from server, do the diff ?
    do the necessary updates ?
    or just update everything to the server flat...

-   status indicator bar
    prop: type, message
    icon by type + message
    types: success, sync, warn, error

-   settings:
    -   use amount
