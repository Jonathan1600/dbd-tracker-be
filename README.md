# dbd-tracker-be

### Heroku - Live EndPoint
https://dbd-tracker-be.herokuapp.com/

Dbd-tracker is a program created with the intention to track the stats of the user automatically. 
This app will be design to show my progress in the video game automatically and will use a web scraper to populate all the information required the back end. 

## Endpoint Summary

| Method | Endpoint                | Description                |
| ------ | ----------------------- | ---------------------------|
| GET    | /api                    | Get all users              |
| GET    | /api/:id                | Gets user by ID            | 
| GET    | /api/steam/:steam_id    | Gets user by Steam ID      |
| POST   | /api                    | Creates a new user         |
| PUT    | /api/:id                | Updates a user by given ID |
| PUT    | /api/steam/:steam_id    | Updates a user by steam ID |
| DELETE | /api/:id                | Deletes a user             |

## View All Users

**GET from /api**

\*returns an array containing the details of each user as an object

## View a Specific User

**GET from /api/:id**

\*returns an object containing the specified user

## Adding a User

**POST to /api**

```
{
      "username": "string", //required
      "steam_id": "string",
      "total_hours": "number",
      "acct_created": "date",
      "total_bloodpoints": "number",
      "ult_rare_offerings": "number",
      "mystery_boxes_opened": "number",
      "survivor_rank": "number",
      "survivor_perfect_games": "number",
      "ult_rare_addons_surv": "number",
      "survivor_full_loadout": "number",
      "generators_repaired": "number",
      "escaped_alive": "number",
      "killer_rank": "number",
      "killer_full_loadout": "number",
      "survivors_sacrificed": "number",
      "hatches_closed": "number"
}
```

\*returns an object showing the newly created user

## Editing a User

**PUT on /api/:id**

\*returns an object with the updated user if sucessful

## Deleting a Plant

**DELETE from /api/:id**

\*returns the message "User deleted succesfully" if successful and the deleted user.


## Viewing a specific user - Steam ID

**GET on /api/steam/:id**

\*returns an object with the user

## Editing a User - Steam ID

**PUT on /api/stea/:id**

\*returns an object with the updated user if sucessful
