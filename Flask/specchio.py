from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_restful import Resource , Api ,reqparse
from flask_googlemaps import GoogleMaps
from bson import json_util

app = Flask(__name__)
app.config["MONGO_URI"] = 'mongodb://Santambrogio:wwwws6Ss@cluster0-shard-00-00.r4fcr.mongodb.net:27017,cluster0-shard-00-01.r4fcr.mongodb.net:27017,cluster0-shard-00-02.r4fcr.mongodb.net:27017/Sito_hotel?ssl=true&replicaSet=atlas-yc014g-shard-0&authSource=admin&retryWrites=true&w=majority'
mongo = PyMongo(app)
CORS(app)
api = Api(app)

# -------------------------------------------------------------------------------------------------------------------Prova

class RegioneAPI(Resource):
    def get(Self,clima):
        #print(clima)
        uss = mongo.db.Regioni.find({"Climi":clima})
        resp = json_util.dumps(uss) 

        return Response(resp, mimetype='application/json')
    def post(self):

        Regione = request.json["DEN_REG"]
        Climi = request.json["Climi"]
        if regione and Climi:
            id = mongo.db.Regioni.find(
                {
                'regione': regione,
                'Climi': Climi,
                }
            )
            resp = {
                "id" : str(id),
                'regione': regione,
                'Climi': Climi,
            }

            return resp
        else:
            return {'message': 'received'}

api.add_resource(RegioneAPI, '/df/<string:clima>', endpoint="df")

if __name__ == '__main__':
    app.run()

class HotelAPI(Resource):
    def get(Self,Regione,latitudine,longitudine):
        print(latitudine,longitudine)
        uss2 = mongo.db.Hotel.find({}, {"_id" : 0 , "Latitudine": 1 , "Longitudine" : 1})#.limit(4)
        resp2 = json_util.dumps(uss2) 
        print(resp2)

        return Response(resp2, mimetype='application/json')
    def post(self):

        Hotel = request.json["Nome"]
        Regione = request.json["regione"]
        Latitudine = request.json["Latitudine"]
        Longitudine = request.json["Longitudine"]

        if Hotel and Regione_Hotel and Longitudine and Latitudine: 
            id = mongo.db.Hotel.find(
                {
                'Hotel': Hotel,
                'Regione': regione,
                'Latitudine': latitudine,
                'Longitudine': longitudine
                }
            )
            resp2 = {
                "id" : str(id),
                'Hotel': Hotel,
                'Regione': regione,
                'Latitudine': latitudine,
                'Longitudine': longitudine
            }

            return resp2
        else:
            return {'message': 'received'}
api.add_resource(HotelAPI, '/df2/<string:latitudine>/<string:longitudine>', endpoint="df2")


if __name__ == '__main__':
    app.run()
