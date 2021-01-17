   
        var r_text = new Array ();
r_text[0] = "Indonesia";
r_text[1] = "Philippines";
r_text[2] = "Nigeria";
r_text[3] = "India";
r_text[5] = "Canada";
r_text[4] = "United Kingdom";
r_text[6] = "United States";
r_text[7] = "Thailand";
r_text[8] = "Spain";
r_text[9] = "China";
r_text[10] = "Romania";
r_text[11] = "Japan";
r_text[12] = "Switzerland";
r_text[13] = "South Korea";


    var r_map = new Array ();
r_map[0] = "img/checklist.png";
r_map[1] = "img/checklist.png";
r_map[2] = "img/checklist.png";
r_map[4] = "img/checklist.png";
r_map[5] = "img/checklist.png";
r_map[6] = "img/checklist.png";

 
var r_product = new Array ();
r_product[0] = "Purchased Silver Plan";
r_product[1] = "Purchased Golden Plan";
r_product[2] = "Purchased Diamond Plan";
r_product[3] = "Withdrawal Bitcoin";
r_product[4] = "Withdrawal Litecoin";
r_product[5] = "Withdrawal Ethereum";
r_product[6] = "Withdrawal Dogecoin";
r_product[7] = "Withdrawal Payeer";
r_product[8] = "Withdrawal Perfect Money";
     setInterval(function(){ $(".custom-social-proof").stop().slideToggle('fast'); }, 5000);
      $(".custom-close").click(function() {
        $(".custom-social-proof").stop().slideToggle('fast');
      });
        setInterval(function(){    
        	var myNumber = Math.floor(7*Math.random());
        	$("#map1").attr("src",r_map[myNumber]);
 			$('#country').text(r_text[myNumber]);

          	$('#product').text(r_product[Math.floor(7*Math.random())]);
 			var timeVal = Math.floor(7*Math.random());
 	
 			$('#time').text(timeVal);
 		
 		 
     //console.log(timeVal); 
 }, 5000);