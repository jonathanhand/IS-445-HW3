
//querySelectorAll() to find all items
const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'altered', children:[]},],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]


  function recurs(depts, divName)
  {
   
      for (var i in depts) //loops through each element in object
    {

        var parentDept = depts[i].name;  //name of the property at index i
        console.log(parentDept);

        /*
        //adding to html with nodes
        var node = document.createElement("li");
        var textnode = document.createTextNode(parentDept);
        node.appendChild(textnode);
        document.getElementById("orgData1").appendChild(list);
        */
      
        var test = '<li>' + depts[i].name+ '</li>';
        document.getElementById(divName).innerHTML += test;

        if(depts[i].children.length > 0)
        {   
            recurs(depts[i].children, divName); //has to pass divName again so knows location
        }
        
        
     }
  }

  recurs(org2_depts, "orgData2"); //added another param for the html div location...
  recurs(org1_depts, "orgData1"); //not sure how else to append the different objects to right spot in html
  
  
  /*
  // with for loops instead of recursion
  function PrintDepts(depts)
    {
        for (var i in depts) 
        {
            var parentDept = depts[i];
            console.log(parentDept.name);
            var node = document.createElement("p");
            var textnode = document.createTextNode(parentDept.name);
            node.appendChild(textnode);
            document.getElementById("orgData1").appendChild(node);
            for (var j=0;j<parentDept.children.length;j++)
            {
                var node = document.createElement("LI");
                var textnode = document.createTextNode(parentDept.children[j].name);
                node.appendChild(textnode);
                document.getElementById("orgData1").appendChild(node);
                
                //document.getElementById("orgData1").innerHTML = parentDept.children[j].name;
                console.log(parentDept.children[j].name);
            }
        }
     }

PrintDepts(org1_depts);
//PrintDepts(org2_depts);
*/
