from urllib import response
from playwright.sync_api import sync_playwright
import requests
class Seneca:
    def __init__(self, url):
        self.url = url
 
    def getData(self, req):
        print('Found!')
        self.correlatonID = req.headers.get('correlationid')

    def null(self):
        pass
    def getCorrelationId(self):
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.on("request", lambda request:  self.getData(request) if len(request.url) == 144 else self.null())

            page.goto(self.url)
            print(page.title())
            browser.close()

    def getJson(self):

        url = "https://course.app.senecalearning.com/api/courses/f4a9de91-3dcc-4e19-b180-1286357dded5/signed-url"

        querystring = {"sectionId":"e86121b1-365f-479c-b7c5-ccfb52343f87"}

        headers = {
            "authority": "course.app.senecalearning.com",
            "correlationid": "1645738748805::eca0d8c50ac9ceba41aef2926b27dda1",
            "user-region": "GB",
            "sec-ch-ua-mobile": "?0",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
            "content-type": "application/json",
            "x-amz-date": "20220224T213908Z",
            "accept": "*/*",
            "origin": "https://app.senecalearning.com",
            "sec-fetch-site": "same-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://app.senecalearning.com/",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
        }

        response = requests.request("GET", url, headers=headers, params=querystring)

        response = requests.get(response.json().get('url'))
        self.json = response.json()