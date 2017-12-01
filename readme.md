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
    "_id": "beer_kentucky_brunch_branch_stout",
    "name": "Kentucky Brunch Brand Stout",
    "type": "American Double",
    "brewer": "Toppling Goliath Brewing Company",
    "ABV": "12.00",
    "score": 4.83,
    "ratings": 640
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
    "_id": "beer_kentucky_brunch_branch_stout",
    "name": "Kentucky Brunch Brand Stout",
    "type": "American Double",
    "brewer": "Toppling Goliath Brewing Company",
    "ABV": "12.00",
    "score": 4.83,
    "ratings": 640
  }
```

## List all breweries - GET /breweries/

**Example**

```
GET /breweries/
```

**Response**

```
[
  {
      "_id": "beer_kentucky_brunch_branch_stout",
      "name": "Kentucky Brunch Brand Stout",
      "type": "American Double",
      "brewer": "Toppling Goliath Brewing Company",
      "ABV": "12.00",
      "score": 4.83,
      "ratings": 640
    },
    {
      "_id": "beer_good_Morning",
      "name": "Good Morning",
      "type": "American Double",
      "brewer": "Tree House Brewing Company",
      "ABV": "8.50",
      "score": 4.74,
      "ratings": 1024
    },,
  //// more stuff

  ]
```

