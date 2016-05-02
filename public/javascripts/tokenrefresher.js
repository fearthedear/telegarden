$(document).ready(function() {
  console.log('temp')
//   var token = '';
//   $.ajax({
//     url: 'https://api.toonapi.com/token',
//     headers: {
//       'Authorization': 'Basic aDU4YlJ4VlN6M3NmNzNpaU9qalR2VVltT2dBYTp4UE0yZjM3XzBJbjdHeWRMZGRwUVdWN3RrbWdh',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     method: 'POST',
//     data: {
//       username: 'Toon30@quby',
//       grant_type: 'password',
//       password: 'Password'
//     },
//     success: agreements
//   });
//   function agreements(data) {
//     token = data.access_token;
//   for (i=0; i<100; i++) {
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://api.toonapi.com/toon/api/v1/agreements",
//       "method": "POST",
//       "headers": {
//         "authorization": "Bearer "+token,
//         "content-type": "application/json"
//       },
//       "processData": false,
//       "data": "{\n    \"agreementId\" : \"quby.9535\"\n}"
//     }
//
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//       setTimeout(function(){
//         console.log("delay")
//       },10000)
//     });
//   }
// }
})
