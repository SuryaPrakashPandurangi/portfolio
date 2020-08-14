import { Component,OnInit } from '@angular/core';
import { RestApi } from 'src/services/rest';

@Component({
    selector: '/skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  dataaa: string;
  constructor(private restApi: RestApi){

  }

  ngOnInit(){
    this.restApi.getSampleData().subscribe((data)=>{
      console.log("YoData: "+data);
      this.dataaa = data.toString();
    });
  }
}