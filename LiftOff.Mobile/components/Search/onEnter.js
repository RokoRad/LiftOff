import key from '../../config/googleKey.js';

const onEnter = (value) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=${key}`).then((response) => {
    console.log(response._bodyInit)
  })
}

export default onEnter;

/*
21:38:40:   "_bodyInit": "{
21:38:40:    \"results\" : [
21:38:40:       {
21:38:40:          \"address_components\" : [
21:38:40:             {
21:38:40:                \"long_name\" : \"Split\",
21:38:40:                \"short_name\" : \"Split\",
21:38:40:                \"types\" : [ \"locality\", \"political\" ]
21:38:40:             },
21:38:40:             {
21:38:40:                \"long_name\" : \"Općina Split\",
21:38:40:                \"short_name\" : \"Općina Split\",
21:38:40:                \"types\" : [ \"administrative_area_level_2\", \"political\" ]
21:38:40:             },
21:38:40:             {
21:38:40:                \"long_name\" : \"Split-Dalmatia County\",
21:38:40:                \"short_name\" : \"Split-Dalmatia County\",
21:38:40:                \"types\" : [ \"administrative_area_level_1\", \"political\" ]
21:38:40:             },
21:38:40:             {
21:38:40:                \"long_name\" : \"Croatia\",
21:38:40:                \"short_name\" : \"HR\",
21:38:40:                \"types\" : [ \"country\", \"political\" ]
21:38:40:             },
21:38:40:             {
21:38:40:                \"long_name\" : \"21000\",
21:38:40:                \"short_name\" : \"21000\",
21:38:40:                \"types\" : [ \"postal_code\" ]
21:38:40:             }
21:38:40:          ],
21:38:40:          \"formatted_address\" : \"21000, Split, Croatia\",
21:38:40:          \"geometry\" : {
21:38:40:             \"bounds\" : {
21:38:40:                \"northeast\" : {
21:38:40:                   \"lat\" : 43.532504,
21:38:40:                   \"lng\" : 16.5104574
21:38:40:                },
21:38:40:                \"southwest\" : {
21:38:40:                   \"lat\" : 43.4994644,
21:38:40:                   \"lng\" : 16.3877096
21:38:40:                }
21:38:40:             },
21:38:40:             \"location\" : {
21:38:40:                \"lat\" : 43.5081323,
21:38:40:                \"lng\" : 16.4401935
21:38:40:             },
21:38:40:             \"location_type\" : \"APPROXIMATE\",
21:38:40:             \"viewport\" : {
21:38:40:                \"northeast\" : {
21:38:40:                   \"lat\" : 43.532504,
21:38:40:                   \"lng\" : 16.5104574
21:38:40:                },
21:38:40:                \"southwest\" : {
21:38:40:                   \"lat\" : 43.4994644,
21:38:40:                   \"lng\" : 16.3877096
21:38:40:                }
21:38:40:             }
21:38:40:          },
21:38:40:          \"place_id\" : \"ChIJF_W8a_xdNRMRmJ-0MfaPeaE\",
21:38:40:          \"types\" : [ \"locality\", \"political\" ]
21:38:40:       }
21:38:40:    ],
21:38:40:    \"status\" : \"OK\"
21:38:40: }

*/