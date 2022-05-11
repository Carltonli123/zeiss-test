import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AllMachinesService } from '../all-machines.service';
import { Machine } from '../machine';
import { Events } from '../events';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('tableModal', { static: false })
  tableModal!: ElementRef;


  allMachines:Machine[] = [];
  selectedEvents: Events[] = [];
  displayedColumns: string[] = ['id', 'machine_type', 'status','longitude', 'latitude', 'last_maintenance', 'install_date','floor','events'];

  constructor(private allMahinesSvc:AllMachinesService
             ) { }

  ngOnInit(): void {

    this.allMahinesSvc.showAllMachines().subscribe(
      data=>{
        let response:any = data;
        this.allMachines = response['data'];
      }
    )

    const subject = webSocket('ws://' + environment.hostname + '/ws')
    subject.subscribe(msg => {
        let result:any = msg;
        for(var machine of this.allMachines){
          if(machine.id == result.payload.machine_id){
            console.log('The status of mchine '+machine.id+' was '+ machine.status);
            machine.status = result.payload.status;
            console.log('Now the status of mchine '+machine.id+' is '+ machine.status);
          }
        }
      },
      err => {
        console.log('Error with websocket connection:', err)
      },
      () => {
        console.log('it has been completed')
      }
    )

  }

  showEvents(id: string) {
    this.tableModal.nativeElement.style.display = 'block';
    this.allMahinesSvc.getMachineById(id).subscribe(
      data=>{
        let response:any = data;
        this.selectedEvents = response['data']['events'];
      }
    )
  }

  closeModal() {
    this.tableModal.nativeElement.style.display = 'none';

 }
   
}
