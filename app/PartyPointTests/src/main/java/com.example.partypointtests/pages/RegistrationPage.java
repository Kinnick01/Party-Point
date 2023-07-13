package com.example.partypointtests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegistrationPage {
    WebDriver driver;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/form")
    private WebElement regForm;

    public WebElement getRegForm() {
        return regForm;
    }

    @FindBy(xpath = "//*[@id=\"username\"]")
    private WebElement usernameRegistration;
    @FindBy(xpath = "//*[@id=\"email\"]")
    private WebElement emailRegistration;
    @FindBy(xpath = "//*[@id=\"password\"]")
    private WebElement passwordRegistration;
    @FindBy(xpath = "//*[@id=\"genres\"]")
    private WebElement genreSetRegistration;
    @FindBy(xpath = "//*[@id=\"genres\"]/option[2]")
    private WebElement genreSetRock;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/form/button")
    private WebElement registerButton;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/div/button")
    private WebElement continueWithGoogle;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[2]/div/button")
    private WebElement continueWithFacebook;

    public RegistrationPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void setUsername(String strUsername) {
        usernameRegistration.sendKeys(strUsername);
    }

    public void setPassword(String strPassword) {
        passwordRegistration.sendKeys(strPassword);
    }

    public void setGenre() {
        genreSetRock.click();
    }

    public void clickRegister() {
        registerButton.click();
    }

    public void registerToPP(String strUername, String strPassword){
        setUsername(strUername);
        setPassword(strPassword);
        setGenre();
        clickRegister();
    }

   /* public void setGenreset(){
        genreSetRegistration.sendKeys(setGenre());
    }*/


}
