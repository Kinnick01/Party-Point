package com.example.partypointtests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    WebDriver driver;

    @FindBy(xpath = "//*[@id=\"username\"]")
    private WebElement usernameLogin;
    @FindBy(xpath = "//*[@id=\"password\"]")
    private WebElement passwordLogin;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/form/button")
    private WebElement submitLogin;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[2]/div/button")
    private WebElement continueWithGoogle;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[3]/div/button")
    private WebElement loginWithFaceBook;
    @FindBy(xpath = "//*[@id=\"root\"]/div/div[2]/div[2]/div[4]/a/button")
    private WebElement homeButton;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void setUsernameLogin(String strUsername) {
        usernameLogin.sendKeys(strUsername);
    }

    public void setPasswordLogin(String strPassword) {
        passwordLogin.sendKeys(strPassword);
    }

    public void clickLogin() {
        submitLogin.click();
    }

    public void Login(String strUsername, String strPassword) {
        this.setUsernameLogin(strUsername);
        this.setPasswordLogin(strPassword);
        this.clickLogin();
    }

    public void clickHomebutton() {
        homeButton.click();
    }
}
