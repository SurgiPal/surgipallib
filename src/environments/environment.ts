// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// http://surgiapi.azurewebsites.net/
export const environment = {
  production: false
};
export const api = {
  url: 'https://surgiapi.azurewebsites.net/api',
  title: 'from config in LIB'
};

export interface AuthConfiguration {
  clientID: string;
  domain: string;
}

export const myConfig: AuthConfiguration = {
  clientID: 'HWaGPswDnLy5BUO4DyJbNWCBfG5VqkCp',
  domain: 'surgipal.auth0.com'
};
export const adminRoutes = [
  { value: 'api/GloveSize', name: 'GloveSize' },
  { value: 'api/Speciality', name: 'Speciality' },
  { value: 'api/Countries', name: 'Countries' }
];


export interface AppConfig {
  apiEndpoint: string;
  title: string;
}

export const HERO_DI_CONFIG: AppConfig = {
  apiEndpoint: 'api.heroes.com',
  title: 'Dependency Injection'
};
