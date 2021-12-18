import json

with open('./data.json') as file:
    originalData = json.load(file)

levelTextToLevel = {
    "LEVEL 3": 3,
    "LEVEL 2": 2,
    "LEVEL 1": 1,
    "--": 0,
    "_": "_"
}

levelToDescription = {
    "LEVEL 3": "severe",
    "LEVEL 2": "moderate",
    "LEVEL 1": "mild",
    "--": "insignificant",
    "_": "_"
}

def countToType(count):
    if count > 100:
        return "Food"
    else:
        return "Environmental"


data = {}
count = 0
for i in originalData["data"]:
    if i["_"] != "_":
        item = {}
        count += 1
        item["name"] = i["__1"]
        item["type"] = countToType(count)
        item["level"] = levelTextToLevel[i["_"]]
        item["details"] = levelToDescription[i["_"]]
        data[item["name"]] = item

    if i["__2"] != "_":
        item = {}
        count += 1
        item["name"] = i["__3"]
        item["type"] = countToType(count)
        item["level"] = levelTextToLevel[i["__2"]]
        item["details"] = levelToDescription[i["__2"]]
        data[item["name"]] = item

newData = {}
newData["data"] = data
    

with open('newData.json', 'w') as outfile:
    json.dump(newData, outfile)