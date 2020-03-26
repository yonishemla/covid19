# covid19

Insructions to use GET and POST from POSTMAN:

POST data in Json format to URL:  http://localhost:3500/logs
Example:
{
"longitude":20.6555555,
"latitude":12.353599,
"people_id":"rsdfd345sf5",
"date":"2020-02-23 19:55",
"user_id":"56d78"
}


 GET data 
GET data in Json format to URL:  http://localhost:3501/logs
Example:
[{"id":6,"longitude":21,"latitude":13,"people_id":"r5","date":"2020-02-23 19:55","user_id":"56d78"},
{"id":7,"longitude":21,"latitude":13,"people_id":"rsdfdsf5","date":"2020-02-23 19:55","user_id":"56d78"},
{"id":8,"longitude":21,"latitude":12,"people_id":"rsdfdsf5","date":"2020-02-23 19:55","user_id":"56d78"},
{"id":9,"longitude":21,"latitude":12,"people_id":"rsdfd345sf5","date":"2020-02-23 19:55","user_id":"56d78"}]
