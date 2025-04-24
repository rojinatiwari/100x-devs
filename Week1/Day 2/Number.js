function ParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  ParseInt("16");
  ParseInt("16px");
  ParseInt("3.14");
  
  function ParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  ParseFloat("3.14");
  ParseFloat("42");
  ParseFloat("42px");