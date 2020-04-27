import { Component, OnInit } from '@angular/core';
import { Stats } from './stats.model';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats:Stats[];
  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.stats = this.statsService.getStats();
  }

}
