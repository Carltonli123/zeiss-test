import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AllMachinesService } from '../all-machines.service';
import { Machine } from '../machine'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allMachines:Machine[] = [];
  displayedColumns: string[] = ['id', 'machine_type', 'status','longitude', 'latitude', 'last_maintenance', 'install_date','floor','events'];

  constructor(private allMahinesSvc:AllMachinesService) { }

  ngOnInit(): void {

    this.allMahinesSvc.showAllMachines().subscribe(
      data=>{
        let response:any = data;
        this.allMachines = response['data'];
        console.log(this.allMachines);
      }
    )
  }

  showEvents(id: string) {
    alert(id);
  }
   
}
