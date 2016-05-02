$(document).ready(function() {
  console.log("okay");

    $('#water').click(function() {

      console.log("starting");
      var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.toonapi.com/toon/api/v1/devices/o-001-233404%253Ahapp_smartplug_662C1B6A265",
      "method": "PUT",
      "headers": {
        "authorization": "Bearer 41a5b44c0d19c43a4c927332df7c24f",
        "content-type": "application/json"
      },
      "processData": false,
      "data": "{\n  \"uuid\": \"o-001-233404:happ_smartplug_662C1B6A265\",\n  \"zwuuid\": \"eneco-001-233404:hdrv_zwave_67923C6A265\",\n  \"deviceType\": \"FGWP011\",\n  \"name\": \"smartplug\",\n  \"position\": 6,\n  \"inSwitchAll\": true,\n  \"inSwitchSchedule\": false,\n  \"usageCapable\": true,\n  \"currentState\": 0\n}"
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    alert("Your plant is being watered! Check in the Livestream");
    })

})
