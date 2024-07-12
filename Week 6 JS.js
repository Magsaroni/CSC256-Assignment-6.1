 // create a function to grab the form inputs and dispay them in the text box
 function submitform(){
    // prevent the form from actually submitting and refreshing.
    event.preventDefault();
    // get our form inputs
    var userName = document.getElementById("txtUserName").value;
    var weaponClass = document.getElementById("txtWeaponClass").value;
    var anarchyRank = document.getElementById("txtAnarchyRank").value;
    var salmonRunRank = document.getElementById("txtSalmonRunRank").value;

    // create a string to hold all info.
    var output = "User Name: " + userName + "\n\n";
    output += "Weapon Class: " + weaponClass + "\n\n";
     output += "Anarchy Rank: " + anarchyRank + "\n\n";
      output += "Salmon Run Rank: " + salmonRunRank + "\n\n";

      // add our formatted string to the text area
      document.getElementById("txtAOutput").value = output;
 }