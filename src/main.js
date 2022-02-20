
class My{

    
    map(list, fn) {
        const a = [];
        for (index = 0; index < list.length; index++) {
            a.push(fn(list[index]));
        }
        return a;
    }

    filter(list, fn) {
        const a = [];
        for (index = 0; index < list.length; index++) {
            if(fn(list[index])){
                a.push(list[index]);
            }   
        }
        return a;
    }

    reduce(list, fn) {
        var a = 0;
        for (index = 0; index < list.length; index++) {
            a += fn(list[index]);
        }
        return a;
    }


    forEach(list, fn) {
        for (index = 0; index < list.length; index++) {
            fn(list[index]);
        }
    }


    

}
