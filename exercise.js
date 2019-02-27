var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------
    // return 'Error: countRecords not implemented'; 
    return data.length;
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    // return 'Error: countDistrictCrimes not implemented'; 
    var districtCount = 0;
    for(var i=0; i<data.length; i++){
        if(data[i][19]==district){
            districtCount += 1;
        }
    }
    return districtCount;
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    // return 'Error: countPrimaryType not implemented';
    var primaryCount = 0;
    for(var i=0; i<data.length; i++){
        if(data[i][13]==primaryType){
            primaryCount += 1;
        }
    }
    return primaryCount;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    // return 'Error: countLocation not implemented';
    var locationCount = 0;
    for(var i=0; i<data.length; i++){
        if(data[i][15]==location){
            locationCount += 1;
        }
    }
    return locationCount;
};

exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------    
    // return 'Error: buildLatLngPoint not implemented';
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;
};




