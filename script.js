

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


  function recurs(depts)
  {
      for (var i in depts)
    {
        console.log(depts[i].name);
        if(depts[i].children.length > 0)
        {
            recurs(depts[i].children);
        }
        
        
     }
  }
  recurs(org2_depts);
  /*
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
