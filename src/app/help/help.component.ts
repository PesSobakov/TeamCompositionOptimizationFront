import { Component,Input,OnInit } from '@angular/core';
import { HelpPage } from './helpPage';
import { ApiService } from '../api.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { AccountInfo } from '../login/accountInfo';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent
{
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
 ) {}

  @Input('id') id? :number ;

  pageNames$: Observable<HelpPage[]> = this.api.getHelpNames();
  page?: Observable<HelpPage>;

  isEditing: boolean = false;
  pageEdit: HelpPage = <HelpPage>{};

  accountInfo?: AccountInfo;

  updateAccountInfo()
  {
    this.api.accountInfo().subscribe((res) =>
    {
      this.accountInfo = res;
    });
  }

  updatePageNames()
  {
    this.pageNames$ = this.api.getHelpNames();
  }

  createPage()
  {
    this.isEditing = true;
    this.pageEdit = <HelpPage>{ id:undefined, name : "", text : "" };
  }
  startEdit(page :HelpPage)
  {
    this.isEditing = true;
    this.pageEdit = page;
  }
  confirmEdit(page: HelpPage)
  {
    if (page.id != undefined){
      this.api.patchHelp(page.id, page).subscribe({
        error: () => { console.log('err') },
        complete: () => { this.isEditing = false; this.updatePageNames(); }
      });
    }
    else {
      this.api.postHelp(page).subscribe({
        error: () => { console.log('err') },
        complete: () => { this.isEditing = false; this.updatePageNames(); }
      });
    }
  }
  delete(id: number)
  {
    this.api.deleteHelp(id).subscribe({
      error: () => { console.log('err') },
      complete: () =>
      {
        this.isEditing = false;
        this.router.navigate(['/help']);
        this.updatePageNames();
      }
    });
  }
  cancel()
  {
    this.isEditing = false;
  }

  ngOnInit()
  {
  }
  ngOnChanges()
  {
    this.updateAccountInfo();
    this.isEditing = false;

    if (this.id != undefined) {
      this.page = this.api.getHelp(this.id);
    }
    else {
      this.page = undefined;
    }
  }
}
