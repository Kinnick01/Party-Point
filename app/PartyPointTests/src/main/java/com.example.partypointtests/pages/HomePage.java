package com.example.partypointtests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    WebDriver driver;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/a[1]/button")
    private WebElement registerButton;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/a[2]/button")
    private WebElement profilePageButton;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[2]/a/button")
    private WebElement genrePageButton;
    @FindBy(xpath = " //*[@id=\"root\"]/div/div[2]/div[2]/a[1]/button")
    private WebElement placePageButton;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/a[2]/button")
    private WebElement eventsPageButton;


    public HomePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickRegisterButton() {
        registerButton.click();
    }

    public void clickProfileButton() {
        profilePageButton.click();
    }
    public void clickGenreButton(){
        genrePageButton.click();
    }
    public void clickPlaceButton(){
        placePageButton.click();
    }
    public void clickEventsButton(){
        eventsPageButton.click();
    }
}
