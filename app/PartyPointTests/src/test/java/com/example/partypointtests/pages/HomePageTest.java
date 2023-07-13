package com.example.partypointtests.pages;

import com.example.partypointtests.util.Base;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Properties;

import static org.junit.jupiter.api.Assertions.*;

class HomePageTest {
    WebDriver driver;
    Properties properties;
    String path;
    Base base;

    HomePage homePage;
    RegistrationPage regpage;

    ProfilePage profPage;



    @BeforeEach
    public void setUp() {
        //webdriver util - ettől elkérni a wd-t
        base = new Base();
        properties = base.initProperties();
        driver = base.initDriver();
        path = properties.getProperty("driverPath");


        homePage = new HomePage(driver);
        regpage = new RegistrationPage(driver);
        profPage = new ProfilePage(driver);

    }

    @Test
    void clickRegisterButton() {
        homePage.clickRegisterButton();
        assertTrue(regpage.getRegForm().isDisplayed());

    }

    @Test
    void clickProfileButton() {
        homePage.clickProfileButton();
        assertTrue(profPage.getProfilePagePrompt().isDisplayed());
    }

    @Test
    void clickGenreButton() {
    }

    @Test
    void clickPlaceButton() {
    }

    @Test
    void clickEventsButton() {
    }
}