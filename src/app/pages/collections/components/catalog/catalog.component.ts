import { Component, OnInit } from '@angular/core';
import { collection } from 'src/app/models/collection.interface';
import { CollectionsService } from '../../collections.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  myCollection : collection [] = [];

  constructor(private colSv: CollectionsService, private utils: UtilsService){}

  ngOnInit(): void {
    this.utils.showLoading();
    this.loadCollections();
 
  }

  public loadCollections(){
    this.colSv.getCollections().subscribe(
      result=>{
        this.myCollection = result.data;
        this.utils.hideLoading();
      }, error => {

      }
    );
  }

}
