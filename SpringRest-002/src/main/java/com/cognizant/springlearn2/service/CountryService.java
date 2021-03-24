package com.cognizant.springlearn2.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn2.Country;

import java.util.List;

@Service
public class CountryService {
	public Country getCountry(String code) throws CountryNotFoundException{
		ApplicationContext context= new ClassPathXmlApplicationContext("country.xml");
		List<Country> countries= context.getBean("countryList", java.util.ArrayList.class);
		for(Country con: countries) {
			if(con.getCode().equalsIgnoreCase(code)) 
				return con;
		}
		throw new CountryNotFoundException();
	}
	
}
