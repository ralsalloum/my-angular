import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular';
  public data:any = {}
  constructor(private http: HttpClient)
  {
    
  }

  ngOnInit(): void
  {
    this.getData();
  }

  getData()
  {
    const url ='https://localhost:8000/api/doc.json'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}
