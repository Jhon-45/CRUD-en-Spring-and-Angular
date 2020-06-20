export class Cliente {

	Cli_cod?: number;
	Cli_nom: string;
	Cli_tel:number;
	Cli_cor:string;
	

    constructor(Cli_cod: number,  Cli_nom: string, Cli_tel:number, Cli_cor:string) {
		
		this.Cli_cod = Cli_cod;
		this.Cli_nom = Cli_nom;
		this.Cli_tel = Cli_tel;
		this.Cli_cor = Cli_cor;
		
	}
	
}

