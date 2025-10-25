
//for(txt="#"; txt.length<=7;txt=txt+"#"){
//    console.log(txt)
//}

var size = 4
for(cont=1;cont<=size;cont++){
    if (cont%2 === 0){
        var ad = "#"
        while(ad.length<=size){
            if(ad.length % 2 === 0){
                ad=ad+"#"
            }else if (ad.length % 2 !=0){
                ad=ad+" "
            }
        }    
    }

    if (cont%2 !=0){
        var ad = " "
        while(ad.length<=size){
            if(ad.length % 2 === 0){
                ad=ad+" "
            }else if (ad.length % 2 !=0){
                ad=ad+"#"
            }
        } 
    }
    console.log(ad)
}
    
