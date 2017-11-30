# Top Brews

## Breweries

- Name
- id (brewer_stone)
- type
- Location
- Bottling capacity
- year founded

## Beer

- id ( beer_stone-ipa )
- name
- type (beer)
- cost
- breweryId
- ingredients
- style ( ipa , ale ,lager)
- alcohol content
- beer score (industry score)
- stars

## Beer Review

- thumbs up or down
- description
- beerId
- similar to
- UserID

## User
- username
- picture
- Name
- hometown
- favorite brewery/beer


## Brewery Document

## Creat a Brewery - POST /breweries

**Example**
```
POST /breweries/

{
  
    "id" : "KR4X6i",
    "description" : "The fact that D.C. has become a world-class beer town ...",
    "name" : "DC Brau Brewing",
    "createDate" : "2012-01-02 00:00:21",
    "mailingListUrl" : "",
    "updateDate" : "2012-01-02 20:12:39",
    "images" : {
      "medium" : "http://s3.amazonaws.com/",
      "large" : "http://s3.amazonaws.com/",
      "icon" : "http://s3.amazonaws.com/"
    },
    "established" : "2009",
    "isOrganic" : "N",
    "website" : "http://www.dcbrau.com",
    "status" : "verified",
    "statusDisplay" : "Verified"
}
```


## Read a Brewery - GET /breweries/:id

**Example**

```
GET /breweries/:id
```
**Response**

```
{
  "status" : "success",
  "data" : {
    "id" : "KR4X6i",
    "description" : "The fact that D.C. has become a world-class beer town ...",
    "name" : "DC Brau Brewing",
    "createDate" : "2012-01-02 00:00:21",
    "mailingListUrl" : "",
    "updateDate" : "2012-01-02 20:12:39",
    "images" : {
      "medium" : "http://s3.amazonaws.com/",
      "large" : "http://s3.amazonaws.com/",
      "icon" : "http://s3.amazonaws.com/"
    },
    "established" : "2009",
    "isOrganic" : "N",
    "website" : "http://www.dcbrau.com",
    "status" : "verified",
    "statusDisplay" : "Verified"
  },
  "message" : "Request Successful"
}
```

## List all breweries - GET /breweries/

**Example**

```
GET /breweries/
```

**Response**

```
{
  "status" : "success",
  "data" : {
    "id" : "KR4X6i",
    "description" : "The fact that D.C. has become a world-class beer town ...",
    "name" : "DC Brau Brewing",
    "createDate" : "2012-01-02 00:00:21",
    "mailingListUrl" : "",
    "updateDate" : "2012-01-02 20:12:39",
    "images" : {
      "medium" : "http://s3.amazonaws.com/",
      "large" : "http://s3.amazonaws.com/",
      "icon" : "http://s3.amazonaws.com/"
    },
    "established" : "2009",
    "isOrganic" : "N",
    "website" : "http://www.dcbrau.com",
    "status" : "verified",
    "statusDisplay" : "Verified"
  },
  "message" : "Request Successful"
},
//// more stuff
```

