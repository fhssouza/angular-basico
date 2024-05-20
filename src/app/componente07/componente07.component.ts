import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {

  //Varável lógica
  condicao: boolean = false;

  //Lista de aprovados e reprovados
  lista: string[] = ['Aprovado', 'Aprovado', 'Reprovado'];

}
