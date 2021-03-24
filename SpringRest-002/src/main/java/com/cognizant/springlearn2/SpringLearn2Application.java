package com.cognizant.springlearn2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource({"classpath:Country.xml"})
public class SpringLearn2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringLearn2Application.class, args);
	}

}
