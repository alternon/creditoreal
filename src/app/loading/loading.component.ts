import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';
import { LoadingService } from "../servicios/loading/loading.service";
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit, OnDestroy  {
  debounceTime: number = 200;
  loading: boolean = true;
  loadingSubscription: Subscription;
    constructor(private loadingScreenService: LoadingService,
      private _elmRef: ElementRef,
      private _changeDetectorRef: ChangeDetectorRef) { }

    ngAfterViewInit() {
      this._elmRef.nativeElement.style.display = 'none';
      this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
        (status: boolean) => {
          this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
          this._changeDetectorRef.detectChanges();
        }
      );
    }

    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
}
