package com.cognizant.springlearn2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn2.Country;
import com.cognizant.springlearn2.service.CountryNotFoundException;
import com.cognizant.springlearn2.service.CountryService;

@RestController
public class CountryController {
 
	@Autowired
	private Country country;
	
	@Autowired
	private List<Country> countryL;
	
	@Autowired
	private CountryService countryService;
	
	@RequestMapping(value="/country")
	public Country getCountryIndia(){
	return country;
		
	}
	
	@GetMapping("/countries") 
	public List<Country> getAllCountries(){
		return countryL;
	}
	
	@GetMapping(path="/country/{code}")
	public Country getCountry(@PathVariable String code) throws CountryNotFoundException {
		return countryService.getCountry(code);
	}
	
	
}
