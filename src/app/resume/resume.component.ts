import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
    selector: '/resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent{
  
  public constructor(private http: HttpClient){
    
  }
  
 
  private saveToFileSystem(response) {
    const contentDispositionHeader: string = response.headers.get('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = "resume.pdf";
    const blob = new Blob([response._body], { type: 'text/plain' });
    saveAs(blob, filename);
  }
  
  downloadResume() {
    this.http.get('src/assets/docs/resume.pdf',
    {responseType : 'blob'}).subscribe((data)=>{
      this.saveToFileSystem(data);
    })
    /*
    this.http.get('src/assets/docs/resume.pdf',
    {responseType : 'blob'}).subscribe((data)=>{
        var blob = new Blob([data], {type: 'application/pdf'});
        console.log(blob);
        saveAs(blob, "resume.pdf");
    },
    err=>{
        console.log(err);
        }
    )
    
    
    let blob = new Blob(["src/assets/docs/resume.pdf"], { type: 'application/octet-stream' });
    const fileURL = URL.createObjectURL(new Blob(["src/assets/docs/resume.pdf"], { type: 'application/octet-stream' }));
    let f = new File(["src/assets/docs/resume.pdf"],"resume.octet-stream",{
      type: "application/octet-stream",
    });

    FileSaver.saveAs(fileURL,"resume.pdf");
    */
    
  }

  viewResume(){
    const fileURL = URL.createObjectURL(new Blob(["../../src/assets/docs/resume-surya.pdf"], { type: 'application/octet-stream' }));
    window.open(fileURL,'_blank');
  }

}