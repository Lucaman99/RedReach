from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome()
driver.get("https://www.redrea.ch/admin-login/")

element = driver.find_element_by_id("user_login")
element.clear()
element.send_keys("jackceroni@gmail.com")

element2 = driver.find_element_by_id("user_pass")
element2.clear()
element2.send_keys("Password")
element2.send_keys(Keys.RETURN)

element3 = driver.find_element_by_id("wp-submit")

element4 = driver.find_elements_by_class_name("wp-menu-name")
print(element4)
