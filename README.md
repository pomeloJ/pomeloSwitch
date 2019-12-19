# pomeloSwitch
 It's really simple for collecting event,and note important processing [Javascript(ES6)]

*for demo something quickly*

*for simple demand*

*for dont't want to think too much*

*for any simple reason*

## CDN JS
for simplicity,just copy and coding

we don't say anymore
```javascript
<script src="https://cdn.ank.uno/github/pomeloJ/pomeloSwitch/pswitch.js"></script>
```

## Basic sample

```javascript
//init it's global function just call it
pswitch;
```
### Set

```javascript
//set "event" "name" and function
pswitch.set('login','send',function(data){
 //function do something
});

```

### Trigger

```javascript
//triger a event
pswitch.trigger('login','send',{'dataInput':'datas'});
```

### Dev

If you wound like to know what's structure about function,you can use DEV function

it will show
```javascript
pswitch.dev();
//it will show about 
```

```JSON
{
   "login":{
      "send":[
         "check data (on line 2)",
         "  if has error (on line 4)",
         "  if correct  (on line 8)",
         "send to server (on line 11)",
         "  if username and pssword ERROR (on line 13)",
         "  if correct (on line 17)",
         "complete login processing (on line 21)"
      ]
   }
}
```
How did it happen?
#### Source code
```javascript
pswitch.set('login','send',function(name){
    //# check data
    let chk = checkSomthing();
        //## if has error
        if(chk===false){
            //do something about error and return false
        }
        //## if correct 
            //do something
    
    //# send to server
    sendToServer();
        //## if username and pssword ERROR
        if(result){
            //do something about error and return false
        }
        //## if correct
        else{
            //do something about success
        }
    //# complete login processing
    
});
```
### Code style

__//#__  this note format will be record
```javascript
//# record processing TITLE
//## will padding left 2 tab
//### will padding left 4 tab
//#### ...
//##### ...
//###### ..
```

# Future
* we have no idea now.....

* we expect to make anything intuitive and simple,maybe just for 71% common situation.

# Star
if this JS helps you, please let us know by giving **star** , thank you.
