package com.cognizant.productavailability.fems.controller;

import com.cognizant.productavailability.fems.model.LocationDTO;
import com.cognizant.productavailability.fems.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/location")
public class LocationController {
    @Autowired
    private LocationService locationService;

    @GetMapping("/{locationID}")
    public LocationDTO getLocationById(@PathVariable Long locationID) {
        return locationService.getLocationById(locationID);
    }

    @GetMapping()
    public List<LocationDTO> getLocations() {
        return locationService.getLocations();
    }
}
