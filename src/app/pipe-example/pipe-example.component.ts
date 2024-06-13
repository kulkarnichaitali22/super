import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  title="welocme to pipe example"

  months=['jan','feb','march','apr','may','june','july','aug','sept','oct','nov','dec']

  jsonval={name:'john', age:21, city:'pune'}

  today_date = new Date().toLocaleDateString();

  emp = [
{
  name:'john',
  salary:23000,
  gender:'male'
},
{
  name:'casie',
  salary:23000,
  gender:'female'
},
{
  name:'sam',
  salary:23000,
  gender:'male'
}



  ]

}
