package com.cognizant.springlearn2;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
	String code;
	String name;

	Logger logger= LoggerFactory.getLogger(Country.class);
	
	public Country() {
		super();
		logger.debug("Inside Country Constructor.");
		
	}

	public Country(String code, String name) {
		super();
		this.code = code;
		this.name = name;
		//System.out.println("Inside Country Constructor.");
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Country [code=" + code + ", name=" + name + "]";
	}

	

}
