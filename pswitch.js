/*
    pomeloSwitch
    Author : pomeloJ
    description : just easy to use
*/
(function (window) {
    window.pswitchData={}
    window.pswitch = {
        'set':function(event,name,func){
            if ((Object.keys(window.pswitchData)).indexOf(event) === -1) {
                window.pswitchData[event] = {};
            }

            if (typeof window.pswitchData[event][name] === "undefined") {
                window.pswitchData[event][name] = func;
            }

            return true;
        },
        'trigger':function(event,name,data){
            if (typeof window.pswitchData[event][name] === "undefined") {
                return false;
            }

            window.pswitchData[event][name](data);

            return true;
        },
        'dev':function(){
            let list = window.pswitchData;

            let result = {}
            let index = Object.keys(window.pswitchData);

            //# "event" name foreach
            index.forEach(function (inx, val) {
                let subIndex = Object.keys(list[inx]);
                result[inx]={}
                //## "name" foreach
                subIndex.forEach(function (inx2, val2) {
                    let t = window.pswitchData[inx][inx2].toString();
                    
                   let t2 = t.split("\n");
                   let valeArr=[];
                   let line=1;
                   //### every line of function
                    t2.forEach(function (inx3, val3){
                        //#### filter useful info
                        let t4 = t2[val3].match(/([\t\s]).*\/\/(#{1,6})\s(.*)/);

                        //#### if match useful info
                        if(t4!==null){
                            let tSpace = ' '.repeat((t4[2].length - 1) * 2);//how many space padding left
                            valeArr.push(tSpace+t4[3]+' (on line '+line+')');
                        }

                        line++;
                   });

                    result[inx][inx2] = valeArr;
                });
                
            });

            console.log(result);

            return result;
        }
    }
}(window));
