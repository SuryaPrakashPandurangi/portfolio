import { Component} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  columnDefss = [
    {headerName: 'Job Role', field: 'role' },
    {headerName: 'Company', field: 'company' },
    {headerName: 'Duration', field: 'duration'}
  ];

  columnDefs = [
    {
      headerName: 'Job Role',
      field: 'role'
      
    }
    ,{
      headerName: 'Company',
      field: 'company'
     
    }
    ,{
      headerName: 'Duration',
      field: 'duration'
    }
    
  ];

  experienceData = [
      { role: 'Associate Software Engineer', company: 'Accion Labs', duration: '4 months' }
     ,{ role: 'Software Engineer', company: 'L&T Infotech Ltd.', duration: '12 months' }
     ,{ role: 'Programmer Analyst', company: 'Cognizant Technologies', duration: '12 months' }
     ,{ role: 'Programmer Analyst Trainee', company: 'Cognizant Technologies', duration: '12 months' }
      
      
  ];
}