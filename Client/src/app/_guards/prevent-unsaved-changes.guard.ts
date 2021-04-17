import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MemeberEditComponent } from '../members/memeber-edit/memeber-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {

  canDeactivate(component: MemeberEditComponent): boolean {
    if(component.editForm.dirty){
      return confirm('Are you sure you want to continue ? Any unsaved changes will be lost');
    }
    return true;
  }
  
}
