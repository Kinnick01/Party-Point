package com.example.partypointtests.util;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;

public class Base {
    public WebDriver driver;
    public Properties prop;
    public String path;

    public Properties initProperties() {
        prop = new Properties();
        try {
            FileInputStream ip = new FileInputStream("/Users/krausadam/Desktop/festivepoint app./Party-Point/app/PartyPointTests/src/main/java/com.example.partypointtests/config/config.properties");
            prop.load(ip);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return prop;
        //java maven resources - read property file ?

        // how to put application to the path (w / mac) - webdrivert a path-ba
        // terminál chromedriver --version / ekkor van benne a pathban
        //mac - bash rc // win system property
        //java singleton pattern.
    }

    public WebDriver initDriver() {
        path = prop.getProperty("driverPath");
        System.setProperty("webdriver.chrome.driver", path);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.get("http://localhost:3000/");
        return driver;
    }
}
