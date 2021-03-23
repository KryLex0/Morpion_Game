console.log("Ce programme JS vient d'être chargé");
$(document).ready(function()
{
  console.log("Le document est prêt");


  $('#rond').click(function(event)
  {
    joueur = 0;
    $('input').css('display', 'none');
    $('p').css('display', 'none');
  });
  $('#croix').click(function(event)
  {
    joueur = 1;
    $('input').css('display', 'none');
    $('p').css('display', 'none');
  });

	$('td').click(function(event)
		{
      numcas = $(this).index();
      if($(this).hasClass('rempli') == false){
          if(joueur == 0){
            //$(this).text('O');
            var img = new Image(128, 128);
            img.src = 'rond.png';
            $(this).append(img);

            console.log("Le joueur O a joué");
            joueur += 1;
            $(this).addClass('rond');
            $(this).addClass('rempli');
          }else{
            //$(this).text('X');
            var img = new Image(128, 128);
            img.src = 'croix.png';
            $(this).append(img);

            console.log("Le joueur X a joué");
            joueur -= 1;
            $(this).addClass('croix');
            $(this).addClass('rempli');
          }
      }else{
        console.log('Case déja remplie');
      }

      

      /*
      var $this = $(this);
      var offset = $this.offset();
      var width = $this.width();
      var height = $this.height();

      var centerX = offset.left + width / 2;
      var centerY = offset.top + height / 2;
      console.log(centerX);
      console.log(centerY);


      caseRemplie.forEach(element => {
        console.log(element);
      });
      */

     var cases = document.getElementsByTagName('td');
     
     var casesForme = [];
     casesForme.length = 9;
     for (let index = 0; index < cases.length; index++) {
       if(cases[index].className.split(" ")[1] == "rempli"){
         casesForme[index] = cases[index].className.split(" ")[0]
       }
     }
     console.log(cases);
     console.log(casesForme);
      
    var caseRemplie = document.getElementsByClassName("rempli");
      
      
    console.log(caseRemplie.length);

    if(casesForme[0] === casesForme[3] && casesForme[3] === casesForme[6] 
      && casesForme[0] !== null && casesForme[3] !== null && casesForme[6] !== null){ //vertical gauche
      window.alert("La partie a été remporté par le " + casesForme[0]);
      document.location.reload();
    }
    else if(casesForme[1] === casesForme[4] && casesForme[4] === casesForme[7] 
      && casesForme[1] != null && casesForme[4] != null && casesForme[7] != null){ //vertical milieu
      window.alert("La partie a été remporté par le " + casesForme[1]);
      document.location.reload();
    }else if(casesForme[2] === casesForme[5] && casesForme[5] === casesForme[8] 
      && casesForme[2] != null && casesForme[5] != null && casesForme[8] != null){ //vertical droite
      window.alert("La partie a été remporté par le " + casesForme[2]);
      document.location.reload();
    }
    
    
    else if(casesForme[0] === casesForme[1] && casesForme[1] === casesForme[2] 
      && casesForme[0] != null && casesForme[1] != null && casesForme[2] != null){ //horizontal haut
      window.alert("La partie a été remporté par le " + casesForme[0]);
      document.location.reload();
    }else if(casesForme[3] === casesForme[4] && casesForme[4] === casesForme[5] 
      && casesForme[3] != null && casesForme[4] != null && casesForme[5] != null){ //horizontal milieu
      window.alert("La partie a été remporté par le " + casesForme[3]);
      document.location.reload();
    }else if(casesForme[6] === casesForme[7] && casesForme[7] === casesForme[8] 
      && casesForme[6] != null && casesForme[7] != null && casesForme[8] != null){ //horizontal bas
      window.alert("La partie a été remporté par le " + casesForme[6]);
      document.location.reload();
    }

    else if(casesForme[0] === casesForme[4] && casesForme[4] === casesForme[8] 
      && casesForme[0] != null && casesForme[4] != null && casesForme[8] != null){ //diagonale hautG - basD
      window.alert("La partie a été remporté par le " + casesForme[0]);
      document.location.reload();
    }else if(casesForme[2] === casesForme[4] && casesForme[4] === casesForme[6] 
      && casesForme[2] != null && casesForme[4] != null && casesForme[6] != null){ //horizontal hautD - basG
      window.alert("La partie a été remporté par le " + casesForme[2]);
      document.location.reload();
    }
    
    else if(caseRemplie.length == 9){
      console.log("Partie finie");
      window.alert("Match Nul.");
      document.location.reload();
    }
    

      console.log(numcas);
		});
	console.log("La mise en place est finie. En attente d'événements...");

});
