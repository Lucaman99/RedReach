from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

driver = webdriver.Chrome()
driver.get('https://redrea.ch/admin-login')
#assert "Stack Overflow" in driver.title
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("Python")
elem.send_keys(Keys.RETURN)
#assert "No Results Found" not in driver.page_source
#driver.quit()
#driver.close()
elem2 = driver.find_element_by_id("pass")
elem3 = driver.find_elements_by_tag_name("option")
elem3[0].get_attribute("value")
elem3[0].click()

select = Select(driver.find_element_by_name("placeholder"))
select.select_by_index(index)
select.select_by_visible_text("text")
select.select_by_value(value)

select.deselect_all()
element.submit()

driver.forward()
driver.backward()

driver.add_cookie(object_element)
driver.get_cookies()
