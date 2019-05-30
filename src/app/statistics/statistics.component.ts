import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{StatService} from '../services/stat.service';
import { from } from 'rxjs';

export interface StatisticElement {
  id: string;
  numberOfTraderIdendified: number;
  maximumGainOfAllTraders: number;
  minimumGainOfAllTraders: number;
  meanGainOfAllTranders: number;
  mostGainingTraderId: number
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'numberOfTraderIdendified', 'maximumGainOfAllTraders', 'minimumGainOfAllTraders', 'meanGainOfAllTranders', "mostGainingTraderId"];
  ELEMENT_DATA : StatisticElement[];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(public statService: StatService){}

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    this.statService.getStats().subscribe(stats => {
      this.ELEMENT_DATA = stats as StatisticElement[];
    })
    this.dataSource.sort = this.sort;
  }

}
