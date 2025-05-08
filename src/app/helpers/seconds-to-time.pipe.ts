import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime',
})
export class SecondsToTimePipe implements PipeTransform {

  transform(totalSeconds: number | undefined): unknown {
    if (totalSeconds == undefined || isNaN(totalSeconds)) return '00:00:00';

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const pad = (val: number) => val.toString().padStart(2, '0');

    if (hours == 0) {
      return `${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

}
