package com.example.partypointtests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.devtools.idealized.Events;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class EventsPage {

    WebDriver driver;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div")
    private WebElement thisIsthePage;

    public EventsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public WebElement getThisIsthePage() {
        return thisIsthePage;
    }
}
