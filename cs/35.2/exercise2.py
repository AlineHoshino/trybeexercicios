import requests
import parsel

url_base = "http://books.toscrape.com/catalogue/"
response = requests.get(url_base + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)
title = selector.css("h1::text").get()
print(title)
price = selector.css(".price_color::text").re_first(r"\d*\.\d{2}")
print(price)
description = selector.css("#product_description + p::text").get()
print(description)
