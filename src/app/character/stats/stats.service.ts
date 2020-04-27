import { Stats } from "./stats.model";
import { Injectable } from "@angular/core";

@Injectable()
export class StatsService {
    private stats:Stats[] = [
        new Stats("Nikordo", 100, 175, 30, 30, 0)
    ];

    getStats(){
        return this.stats.slice();
    }
}