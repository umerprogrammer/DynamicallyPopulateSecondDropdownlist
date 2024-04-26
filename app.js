var mobiles = {
    iphone: {
      iphone7: {
          Model:"IPhone 7",
          RAM:"4GB",
          ROM:"128GB",
          Camera:"108px",
          LCD:"6.5"
      },
      iphone8: {
        Model:"IPhone 8",
        RAM:"8GB",
        ROM:"128GB",
        Camera:"150px",
        LCD:"6.7"
      },
      iphone8plus: {
        Model:"IPhone 8 Plus",
        RAM:"12GB",
        ROM:"512GB",
        Camera:"180px",
        LCD:"6.8"
      },
      iphoneX: {
        Model:"IPhone X",
        RAM:"12GB",
        ROM:"512GB",
        Camera:"180px",
        LCD:"6.9"
      },
      iphone11: {
        Model:"IPhone 11",
        RAM:"12GB",
        ROM:"512GB",
        Camera:"180px",
        LCD:"6.8"
      },
    },
    xiomi: {
      redmiA2: {
        Model:"Redmi A2",
        RAM:"4GB",
        ROM:"64GB",
        Camera:"180px",
        LCD:"6.5"
      },
      redmi10: {
        Model:"Redmi 10",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"50px",
        LCD:"6.6"
      },
      redmi11: {
        Model:"Redmi Note 11",
        RAM:"6GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      redmi12: {
        Model:"Redmi Note 12",
        RAM:"6GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      redmi13: {
        Model:"Redmi Note 13",
        RAM:"6GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      redmi13C: {
        Model:"Redmi 13C",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
    },
    realme: {
      realmiNote50: {
        Model:"Realmi Note 50",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      realmiC67: {
        Model:"Realmi C67",
        RAM:"4GB",
        ROM:"64GB",
        Camera:"108px",
        LCD:"6.6"
      },
      realmiC53: {
        Model:"Realmi C53",
        RAM:"4GB",
        ROM:"64GB",
        Camera:"108px",
        LCD:"6.6"
      },
      realmi9: {
        Model:"Realmi 9",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      realmi9i: {
        Model:"Realmi 9i",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
    },
    tecno: {
      spark20: { 
        Model:"Spark 20",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      
      spark20Pro: { 
        Model:"Spark 20 Pro",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      
      spark20C: {
        Model:"Spark 20C",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
    },

      POVA6: {
        Model:"Spark Pova6",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
      PhantomV: {
        Model:"Spark PhantomV",
        RAM:"4GB",
        ROM:"128GB",
        Camera:"108px",
        LCD:"6.6"
      },
    },
  };


  var dropModel = document.getElementById("mobileModel");
  var dropMobileName = document.getElementById("mobilename");
  var tableInfo = document.getElementById("mobInformation");
  var tbody = document.getElementById("infoBody");

  var allbrand = Object.keys(mobiles);
  allbrand.forEach(element => {
     dropModel.innerHTML += `<option value="${element}">${element}</option>`
   });

   function selectBrand(param) {
    let allMobile = Object.keys(mobiles[param.target.value]);
    dropMobileName.innerHTML = "<option value='Select Model'>Select Model</option>";
    tbody.innerHTML = "";
    allMobile.forEach(element => {
        dropMobileName.innerHTML += `<option value="${element}">${element}</option>`
     });  
   }
   function selectModel(param) {
    let mobInfo = Object.keys(mobiles[dropModel.value][dropMobileName.value])
    tbody.innerHTML= "";
     var i = 0;
    mobInfo.forEach(element =>{
        tbody.innerHTML +=`
        <tr>
            <td>
            ${element}
            </td>
            <td>
            ${Object.values(mobiles[dropModel.value][dropMobileName.value])[i]}
            </td>
        </tr>`
        i++;   
     })
  
   }

