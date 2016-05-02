$('#water').click(function() {
  console.log("starting");
  var turnoff = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.toonapi.com/toon/api/v1/devices/o-001-233404%253Ahapp_smartplug_662C1B6A265",
  "method": "PUT",
  "headers": {
    "authorization": "Bearer d16782bc9aca5b6bd5b2ba72a9934",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "b79cc84e-9807-741d-fc49-7d4fb75a8725"
  },
  "processData": false,
  "data": "{\n  \"uuid\": \"o-001-233404:happ_smartplug_662C1B6A265\",\n  \"zwuuid\": \"eneco-001-233404:hdrv_zwave_67923C6A265\",\n  \"deviceType\": \"FGWP011\",\n  \"name\": \"smartplug\",\n  \"position\": 6,\n  \"inSwitchAll\": true,\n  \"inSwitchSchedule\": false,\n  \"usageCapable\": true,\n  \"currentState\": 0\n}"
}

$.ajax(turnoff).done(function (response) {
  console.log(response);
});
  console.log("works");

})
