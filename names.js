//console.log('hello world');

let people1 = "james,andrew";
let people = "james,peter,esther,andrew,john,jonathan,joshua, janeth, faith";
let groups = [];

let n = 3;
console.log(groupNames(n,people));

function shuffleArray(arr) {
    var ctr = arr.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }

    return arr;
}
function groupNames(n,names)
{
    let peopleArray = names.split(',');
    let groups = [];
    if(peopleArray.length <= n)
    {
        // this is just for one group
         groups.push(peopleArray);
    }
    else
    {    
        let numberOfGroups = Math.floor(peopleArray.length / n);
        startIndex = 0;
        for(let i = 0; i < numberOfGroups; i++)
        {
            let arr = [];
            
            for(let a = startIndex; a < n + startIndex; a++)
            {
                        
                arr.push(peopleArray[a]); 
            }

            startIndex += n;

            groups.push(shuffleArray(arr));
        }

        let tt = numberOfGroups * n;
        if ((peopleArray.length - tt) > 0)
        {
            let dd = peopleArray.length - tt
            let nArr = [];
            for(let c = tt ; c < tt + dd; c++)
            {
                nArr.push(peopleArray[c]);
            }

            groups.push(shuffleArray(nArr));
        } 
    }

    let formattedGroups = "";
    for(let i=0; i<groups.length; i++)
    {
        formattedGroups += "group " + (i + 1) + ": " + JSON.stringify(groups[i].join(",")) + '\n';
        
    }
   
    return formattedGroups;

}

