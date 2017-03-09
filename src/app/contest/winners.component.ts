import { Component, ChangeDetectionStrategy} from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'winners.component.html'
})
export class  WinnersComponent {
  public tabs: any[] = [
    {title: 'Dynamic Title tab 1', content: 'Dynamic content new 1'},
    {title: 'Dynamic Title tab 2', content: 'Dynamic content  new 2', disabled: false},
    {title: 'Dynamic Title tab 3', content: 'Dynamic content  new 3', removable: true}
  ];
 
  public setActiveTab(index: number): void {
    this.tabs[index].active = true;
  }
 
 // public removeTabHandler(/*tab:any*/): void {
   // console.log('Remove Tab handler');
// }
}