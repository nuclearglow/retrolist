1. Register Challenge

fetch("http://localhost:8080/auth/challenge/register/nuky", {
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

2. Register Challenge Response

{
"rp": {
"name": "localhost",
"id": "localhost"
},
"user": {
"id": "bnVreQ",
"name": "nuky",
"displayName": "nuky"
},
"challenge": "ozDZwELwxH07ElMf7-9nJKfhQv5n_yJe-LhAfWO5pW4",
"pubKeyCredParams": [
{
"type": "public-key",
"alg": -7
},
{
"type": "public-key",
"alg": -35
},
{
"type": "public-key",
"alg": -36
},
{
"type": "public-key",
"alg": -257
},
{
"type": "public-key",
"alg": -258
},
{
"type": "public-key",
"alg": -259
},
{
"type": "public-key",
"alg": -37
},
{
"type": "public-key",
"alg": -38
},
{
"type": "public-key",
"alg": -39
},
{
"type": "public-key",
"alg": -8
}
],
"timeout": 60000,
"attestation": "direct",
"authenticatorSelection": {
"requireResidentKey": false,
"userVerification": "discouraged"
}
}

2. Register

fetch("http://localhost:8080/auth/register/nuky", {
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
"body": "{\"id\":\"B-hZgCaJyUh2s8pLht36GBAhvJWtEVu6b9erhaQp1GfHXGzCM9dOxk3U9J2d-brGF4GmdUryV8cVZJdikxFXCg\",\"rawId\":\"B-hZgCaJyUh2s8pLht36GBAhvJWtEVu6b9erhaQp1GfHXGzCM9dOxk3U9J2d-brGF4GmdUryV8cVZJdikxFXCg\",\"response\":{\"attestationObject\":\"o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEgwRgIhALWJhmng2yWu84lyo9lI4D0VnU3kmk0I0XjIDDYfSJtwAiEA_Vh5y2stM1jDEdlsYe6domv0hRyGZ0m-LpFsrPJl5xFjeDVjgVkCwTCCAr0wggGloAMCAQICBB6PhzQwDQYJKoZIhvcNAQELBQAwLjEsMCoGA1UEAxMjWXViaWNvIFUyRiBSb290IENBIFNlcmlhbCA0NTcyMDA2MzEwIBcNMTQwODAxMDAwMDAwWhgPMjA1MDA5MDQwMDAwMDBaMG4xCzAJBgNVBAYTAlNFMRIwEAYDVQQKDAlZdWJpY28gQUIxIjAgBgNVBAsMGUF1dGhlbnRpY2F0b3IgQXR0ZXN0YXRpb24xJzAlBgNVBAMMHll1YmljbyBVMkYgRUUgU2VyaWFsIDUxMjcyMjc0MDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABKh5-CM47RSUusBwS8x_xmPRsnFxWXYkMQHHYFEV18FSnigcHGcyLThLXNVd0-mBjV_YXCKvMm4MZPwgr-M_I2ajbDBqMCIGCSsGAQQBgsQKAgQVMS4zLjYuMS40LjEuNDE0ODIuMS43MBMGCysGAQQBguUcAgEBBAQDAgQwMCEGCysGAQQBguUcAQEEBBIEEC_AV5-BE0fqsRa7Wo25ICowDAYDVR0TAQH_BAIwADANBgkqhkiG9w0BAQsFAAOCAQEAhpP_Yt8NV3nUdI1_yNECJzGKjlgOajpXwQjpTgPDhWizZolPzlYkvko-\_X80EYs9mTdD95KhmJFgyPya4LBOPfnuFePojAT8gqjcv1gY4QjcwpaFd655_2YrlHNOPexFlzBdc-blXuK-uc2WeMoJNeUz62OPjib6u4F82kQfvpgxgyrl9uKtmS-eu9tMYiOLj416tIHW0yY7zb-eSldVA3CYitWBNED6AyyttnI8rdj417qAn3W0PP-gpbmt0UIy752eFIEmOCM8TKSoc7n4rJjjK6GRZ2BuFZCfzdtKLf-9rkYgJJ-aZkasgeSDLREZ_r-qcxqILaJad4J9RtGQF2hhdXRoRGF0YVjESZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NBAAAAAi_AV5-BE0fqsRa7Wo25ICoAQAfoWYAmiclIdrPKS4bd-hgQIbyVrRFbum_Xq4WkKdRnx1xswjPXTsZN1PSdnfm6xheBpnVK8lfHFWSXYpMRVwqlAQIDJiABIVggbzmQvN30lYT-MJVAYvkwkkPqrcNkVwMmYo6mfmga6u0iWCBbwIemTcppk2Cz8V1DnyX03rbwxvsEAy1uarycwC1N2Q\",\"clientDataJSON\":\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoib3pEWndFTHd4SDA3RWxNZjctOW5KS2ZoUXY1bl95SmUtTGhBZldPNXBXNCIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImNyb3NzT3JpZ2luIjpmYWxzZSwib3RoZXJfa2V5c19jYW5fYmVfYWRkZWRfaGVyZSI6ImRvIG5vdCBjb21wYXJlIGNsaWVudERhdGFKU09OIGFnYWluc3QgYSB0ZW1wbGF0ZS4gU2VlIGh0dHBzOi8vZ29vLmdsL3lhYlBleCJ9\"},\"type\":\"public-key\"}",
"method": "POST",
"mode": "cors",
"credentials": "include"
});

3. Login Challenge

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

Login Challenge Reponse

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

4. Login

fetch("http://localhost:8080/auth/login/nuky", {
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
"body": "{\"id\":\"B-hZgCaJyUh2s8pLht36GBAhvJWtEVu6b9erhaQp1GfHXGzCM9dOxk3U9J2d-brGF4GmdUryV8cVZJdikxFXCg\",\"rawId\":\"B-hZgCaJyUh2s8pLht36GBAhvJWtEVu6b9erhaQp1GfHXGzCM9dOxk3U9J2d-brGF4GmdUryV8cVZJdikxFXCg\",\"response\":{\"authenticatorData\":\"SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2MBAAAAAw\",\"clientDataJSON\":\"eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiQVJfMmJKNkh6Q2JGcnNVTjNGWjRJSTdHd082YXJ4eXNKd1EwMUpZWEFtYyIsIm9yaWdpbiI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImNyb3NzT3JpZ2luIjpmYWxzZSwib3RoZXJfa2V5c19jYW5fYmVfYWRkZWRfaGVyZSI6ImRvIG5vdCBjb21wYXJlIGNsaWVudERhdGFKU09OIGFnYWluc3QgYSB0ZW1wbGF0ZS4gU2VlIGh0dHBzOi8vZ29vLmdsL3lhYlBleCJ9\",\"signature\":\"MEUCIDpHBH1fPI_zPv31QhcZmbKr6eXUPP4nO8EOdGJPcRTwAiEA0pAAHnISELmplUxEip6AaqHeSahbCDCTOu540tWOQr8\",\"userHandle\":\"\"},\"type\":\"public-key\"}",
"method": "POST",
"mode": "cors",
"credentials": "include"
});

Response 200
