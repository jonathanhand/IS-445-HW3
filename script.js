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
      children: [],
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

  function recurs(depts, target, depth)
  {
      depth += 1;
      for (var i in depts) //loops through each element in object
    {

        var deptName = depts[i].name;  //name of the property at index i
        if (depth === 1)
        {
            var ULNode = document.createTextNode(deptName);
            target.appendChild(ULNode);
        }
        else
        {
            //adding to html with nodes
            var node = document.createElement("li");
            var textnode = document.createTextNode(deptName);
            node.appendChild(textnode);
            target.appendChild(node); //appends to current selected target tag
        }
        if(depts[i].children.length > 0) //when the element has children
        {   
            var childNode = document.createElement('ul');
            var childTextNode = target.appendChild(childNode); //appends new ul to target to make nested list
            recurs(depts[i].children, childNode, depth); //has to pass new target so nests the next children
        }
        
        
     }
  }
  var depth = 0;
  recurs(org1_depts, document.getElementById("orgUL1"), depth); //added another param for the html div location...
  recurs(org2_depts, document.getElementById("orgUL2"), depth);   
