var app = angular.module("claimApp");
app.service("typeService", ["$http", function ($http) {
    this.getSubtypes = function (type) {
        if (type == 'time') {
            return [{
                "amountReq": false
                , "daysReq": false
                , "descriptionReq": true
                , "destinationReq": false
                , "endDate": "9999-12-31T00:00:00Z"
                , "endDateReq": false
                , "endTimeReq": false
                , "fullDayReq": false
                , "hoursReq": true
                , "id": 36
                , "milesReq": false
                , "name": "RS_ADDHRS_HIGHER_DAY"
                , "payScaleGroupReq": true
                , "payScaleLevelReq": true
                , "regionReq": false
                , "sapSubtype": "5115"
                , "startDate": "1900-01-01T00:00:00Z"
                , "startDateReq": true
                , "startLocationReq": false
                , "startTimeReq": false
                , "tagReq": true
                , "text": "Additional Hours (Higher Grade) (Day)"
                , "vehicleTypeReq": false
        }, {
                "amountReq": false
                , "daysReq": false
                , "descriptionReq": true
                , "destinationReq": false
                , "endDate": "9999-12-31T00:00:00Z"
                , "endDateReq": false
                , "endTimeReq": false
                , "fullDayReq": false
                , "hoursReq": true
                , "id": 36
                , "milesReq": false
                , "name": "RS_ADDHRS_HIGHER_DAY"
                , "payScaleGroupReq": true
                , "payScaleLevelReq": true
                , "regionReq": false
                , "sapSubtype": "5115"
                , "startDate": "1900-01-01T00:00:00Z"
                , "startDateReq": true
                , "startLocationReq": false
                , "startTimeReq": false
                , "tagReq": true
                , "text": "Overtime"
                , "vehicleTypeReq": false
        }, {
                "amountReq": false
                , "daysReq": false
                , "descriptionReq": true
                , "destinationReq": false
                , "endDate": "9999-12-31T00:00:00Z"
                , "endDateReq": false
                , "endTimeReq": false
                , "fullDayReq": false
                , "hoursReq": true
                , "id": 36
                , "milesReq": false
                , "name": "RS_ADDHRS_HIGHER_DAY"
                , "payScaleGroupReq": true
                , "payScaleLevelReq": true
                , "regionReq": false
                , "sapSubtype": "5115"
                , "startDate": "1900-01-01T00:00:00Z"
                , "startDateReq": true
                , "startLocationReq": false
                , "startTimeReq": false
                , "tagReq": true
                , "text": "Acting up"
                , "vehicleTypeReq": false
        }];
        }
        else if (type == 'mileage') {
            return [{
                "amountReq": false
                , "daysReq": false
                , "descriptionReq": true
                , "destinationReq": true
                , "endDate": "9999-12-31T00:00:00Z"
                , "endDateReq": false
                , "endTimeReq": true
                , "fullDayReq": false
                , "hoursReq": false
                , "id": 85
                , "milesReq": true
                , "name": "RS_TRIP"
                , "payScaleGroupReq": false
                , "payScaleLevelReq": false
                , "regionReq": false
                , "sapSubtype": "5115"
                , "startDate": "1900-01-01T00:00:00Z"
                , "startDateReq": true
                , "startLocationReq": true
                , "startTimeReq": true
                , "tagReq": true
                , "text": "Mileage"
                , "vehicleTypeReq": true
        }];
        }
        else if (type == 'expenses') {
            return [{
                    "amountReq": true
                    , "daysReq": false
                    , "descriptionReq": true
                    , "destinationReq": false
                    , "endDate": "9999-12-31T00:00:00Z"
                    , "endDateReq": false
                    , "endTimeReq": false
                    , "fullDayReq": false
                    , "hoursReq": false
                    , "id": 85
                    , "milesReq": false
                    , "name": "RS_FARE"
                    , "payScaleGroupReq": false
                    , "payScaleLevelReq": false
                    , "regionReq": true
                    , "sapSubtype": "5115"
                    , "startDate": "1900-01-01T00:00:00Z"
                    , "startDateReq": true
                    , "startLocationReq": true
                    , "startTimeReq": false
                    , "tagReq": true
                    , "text": "Fares"
                    , "vehicleTypeReq": false
        }
            , {
                    "amountReq": true
                    , "daysReq": false
                    , "descriptionReq": true
                    , "destinationReq": false
                    , "endDate": "9999-12-31T00:00:00Z"
                    , "endDateReq": false
                    , "endTimeReq": false
                    , "fullDayReq": false
                    , "hoursReq": false
                    , "id": 85
                    , "milesReq": false
                    , "name": "RS_HTL"
                    , "payScaleGroupReq": false
                    , "payScaleLevelReq": false
                    , "regionReq": true
                    , "sapSubtype": "5115"
                    , "startDate": "1900-01-01T00:00:00Z"
                    , "startDateReq": true
                    , "startLocationReq": true
                    , "startTimeReq": false
                    , "tagReq": true
                    , "text": "Hotel Costs"
                    , "vehicleTypeReq": false
        }
            , {
                    "amountReq": true
                    , "daysReq": false
                    , "descriptionReq": true
                    , "destinationReq": false
                    , "endDate": "9999-12-31T00:00:00Z"
                    , "endDateReq": false
                    , "endTimeReq": false
                    , "fullDayReq": false
                    , "hoursReq": false
                    , "id": 85
                    , "milesReq": false
                    , "name": "RS_PARK"
                    , "payScaleGroupReq": false
                    , "payScaleLevelReq": false
                    , "regionReq": true
                    , "sapSubtype": "5115"
                    , "startDate": "1900-01-01T00:00:00Z"
                    , "startDateReq": true
                    , "startLocationReq": true
                    , "startTimeReq": false
                    , "tagReq": true
                    , "text": "Car Parking"
                    , "vehicleTypeReq": false
        }
            , {
                    "amountReq": true
                    , "daysReq": false
                    , "descriptionReq": true
                    , "destinationReq": false
                    , "endDate": "9999-12-31T00:00:00Z"
                    , "endDateReq": false
                    , "endTimeReq": false
                    , "fullDayReq": false
                    , "hoursReq": false
                    , "id": 85
                    , "milesReq": false
                    , "name": "RS_POST"
                    , "payScaleGroupReq": false
                    , "payScaleLevelReq": false
                    , "regionReq": true
                    , "sapSubtype": "5115"
                    , "startDate": "1900-01-01T00:00:00Z"
                    , "startDateReq": true
                    , "startLocationReq": true
                    , "startTimeReq": false
                    , "tagReq": true
                    , "text": "Postage"
                    , "vehicleTypeReq": false
        }

               ];
        };
    }
}]);
