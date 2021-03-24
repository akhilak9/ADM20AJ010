package com.cognizant.springlearn2.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

	@GetMapping("/hello")
	public String sayHello() {
		LOGGER.info("START sayHello()");
		LOGGER.info("END sayHello()");
		return "Hello World!!";
	}

}
