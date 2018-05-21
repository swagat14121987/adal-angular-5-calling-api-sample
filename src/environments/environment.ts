// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


export const environment = {
  production: false,

  adalConfig: {
    tenant: 'mikedlogicjunction.onmicrosoft.com',
    clientId: '44364913-7fe1-4ba7-abb4-f8fd7e7c8202',
    postLogoutRedirectUri: window.location.origin,
    endpoints: {
      graphApiUri: 'https://ljrestservicestaging-ad.azurewebsites.net',
    },
    requireADLogin: true,
    cacheLocation: 'localStorage',
    redirectUri:`${window.location.origin}`
  }
};
