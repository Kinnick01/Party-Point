package com.example.partypointtests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProfilePage {
    WebDriver driver;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div/p")
    private WebElement profilePagePrompt;

    public ProfilePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    public WebElement getProfilePagePrompt() {
        return profilePagePrompt;
    }
}
