function moyenne()
{	
	var tableau = new Array(10, 13, 13, 12, 15, 12, 11, 16, 14);
	var n = tableau.length;
	var somme=0;
	for(i=0; i<n; i++)
	{
		somme += tableau[i];
	}
	var resultat = somme / n;

    console.log(resultat);

}