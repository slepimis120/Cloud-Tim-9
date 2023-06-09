// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  cognito: {
    userPoolId: 'us-east-1_m0vDv8Jjf',
    userPoolWebClientId: '736lfmfb22aivdec09sf8mo3go'
  },
  AWS_ACCESS_KEY_ID: "<your_aws_access_key_id>",
  AWS_SECRET_ACCESS_KEY: "<your_aws_secret_access_key>",
  AWS_REGION: "us-east-1"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
