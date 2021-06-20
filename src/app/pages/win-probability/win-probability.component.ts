import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";

import { Opportunity } from "../../models/opportunity";
import { WinProbabilityService } from "./win-probability.service";

@Component({
  selector: 'app-win-probability',
  templateUrl: './win-probability.component.html',
  styleUrls: ['./win-probability.component.css']
})
export class WinProbabilityComponent implements OnInit {

  constructor(private probAPIService: WinProbabilityService,  private toastr: ToastrService) { 
    this.opportunity={
      RequestTypeId: 0,
      statusId: 1,
      country: '',
      invoiceOfficeLocation:'',
      parentCompanyId: 0,
      clientTypeId:'',
      assetTypeId : '',
      serviceType : '',
      subServiceTypeId: '',
      opportunityScopeId: 0,
      salesChannelId : 0,
      isInCompetition : false,
      isRFP : false
    }

  }

  public opportunity : Opportunity;
  public predictSubscription: Subscription;
  public busy: boolean = false;
  public result: string;
  public hasResult: boolean = false;

  public editUserForm = new FormGroup({
    RequestTypeId : new FormControl('', Validators.required),
    statusId : new FormControl('', Validators.required),
    country : new FormControl('', Validators.required),
    invoiceOfficeLocation : new FormControl('', Validators.required),
    parentCompanyId : new FormControl('', Validators.required),
    assetTypeId : new FormControl('', Validators.required),
    serviceType : new FormControl('', Validators.required),
    subServiceTypeId : new FormControl('', Validators.required),
    opportunityScopeId : new FormControl('', Validators.required),
    salesChannelId : new FormControl('', Validators.required),
    isInCompetition : new FormControl('', Validators.required),
    isRFP : new FormControl('', Validators.required),
    clientTypeId : new FormControl('', Validators.required)
  });

  public predict(formData: Opportunity){
    this.busy = true;
    formData.isRFP = false;
    formData.isInCompetition = false;
    this.predictSubscription = this.probAPIService.predict(formData).subscribe(res => {
      this.busy = false;
      this.result = res;
      this.hasResult = true;
      this.toastr.success(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Predicted '+ res +' successfully</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-top-right"
        }
      );
    })
  }

  ngOnInit(): void {
  }

}
