import CommonErrors from './'
console.log(CommonErrors)


const {
  CONSTANTS,
  Schemas,
  Utils
} = CommonErrors
console.log(CONSTANTS)
console.log(Schemas)
console.log(Utils)


const {
  isUrl
} = Utils
console.log(isUrl)

const MOCK_URLS = {
  validator: {
    name: `isUrl`,
    blueprint: {
      abstract: `isUrl(<STRING>)`,
      expects: {
       toFail: {
         arguments: new Map([
           [
             `REQUIRED`,
             new Set([
               `Value of argument[0].length === 0 as return of Type:Number and Value:0`,
               `Value of argument[0] to resolve typeof <argument[0]> !== "string" as return of Type:BOOLEAN and Value:true`
             ])
           ]
         ])
       },
       toPass: {
         arguments: new Map([
           [
             `REQUIRED`,
             new Set([
               `Value of argument[0].length === 1 as return of Type:Number and Value:1`,
               `Value of argument[0] to resolve typeof <argument[0]> === "string" as return of Type:BOOLEAN and Value:true`,
               `Value of argument[0] to resolve <argument[0]> instanceof String as return of Type:BOOLEAN and Value:true`
             ])
           ],
           [
             `OPTIONAL`,
             new Set([
               `Value of argument[0] to resolve <argument[0]> instanceof URL as return of Type:BOOLEAN and Value:true`
             ])
           ]
         ])
       }
      }
    },

  },
  fails: `iAm://Not a vaLID/URL#AT-ALL`,
  passes:`https://good-url-example.cool/route-prefix/path/to/a-file.html#hash_fragment`
}

console.log(isUrl(badUrl));
