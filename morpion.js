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
      console.log(numcas);
		});
	console.log("La mise en place est finie. En attente d'événements...");

});
