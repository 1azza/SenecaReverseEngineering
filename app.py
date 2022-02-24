from flask import Flask, render_template
import flask
from Senecapy.GetAnswers import Seneca
import requests
app = flask.Flask(__name__)
app.config["DEBUG"] = True

def Step2():
    pass
def Step1(url):
    client = Seneca(url)
    client.getCorrelationId()
    client.getJson()
    return client.json

url = 'https://app.senecalearning.com/classroom/course/f4a9de91-3dcc-4e19-b180-1286357dded5/section/e86121b1-365f-479c-b7c5-ccfb52343f87/session'
@app.route('/<string:pt1>/section/<string:pt2>', methods=['GET'])
def home(pt1,pt2):
    courseId = pt1+'/section/' +pt2 + '/session'
    url = 'https://app.senecalearning.com/classroom/course/' + courseId

    return render_template('base.html', url=Step1(url))

app.run()