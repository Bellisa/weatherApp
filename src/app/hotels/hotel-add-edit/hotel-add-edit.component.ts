import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormControlName, FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IHotel } from 'src/interfaces/IHotel';
import { Subscription, Observable, fromEvent, pipe, merge } from 'rxjs';
import { GenericValidator } from 'src/services/generic-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromHotel from '../state';
import * as hotelActions from '../state/hotel.actions';
import { NumberValidators } from 'src/services/number.validator';
import { HotelService } from 'src/services/hotel.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-add-edit',
  templateUrl: './hotel-add-edit.component.html',
  styleUrls: ['./hotel-add-edit.component.css']
})
export class HotelAddEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  pageTitle: string = 'Hotel Edit';
  errorMessage: string;
  hotelForm: FormGroup;

  hotel: IHotel;
  private sub: Subscription;
  private sub2: Subscription;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get photos(): FormArray {
    return <FormArray>this.hotelForm.get('photos');
  }

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromHotel.State>,
    private serviceHotel: HotelService
  ) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      title: {
        required: 'Hotel name is required.',
        minlength: 'Hotel name must be at least three characters.',
        maxlength: 'Hotel name cannot exceed 50 characters.'
      },
      description: {
        required: 'Hotel description is required.'
      },
      address: {
        range: 'Hotel description is required.'
      }
      ,
      phone: {
        range: 'Hotel phone is required.'
      }
      ,
      picture: {
        range: 'Hotel picture is required.'
      }
      ,

      weather: {
        range: 'Hotel weather is required.'
      }
      ,
      profile: {
        range: 'Hotel profile is required.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }


  ngOnInit() {
    this.hotelForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      description: ['', Validators.required],
      address: null,
      phone: null,
      picture: null,
      photos: this.fb.array([])
      ,
      weather: null,
      profile: null,
      stars: ['', NumberValidators.range(1, 5)]
    });

    // Read the product Id from the route parameter
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['hotelID'];
        this.getHotel(id);
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // this.formInputElements
    //     .map((formControl: ElementRef) =>pipe((fromEvent(formControl.nativeElement, 'blur')
    //     ,merge(this.hotelForm.valueChanges),
    //     debounceTime(800)).subscribe(value => {
    //       this.displayMessage = this.genericValidator.processMessages(this.hotelForm);
    //   })
    //   ));
    // Merge the blur event observable with the valueChanges observable


  }

  addTag(): void {
    this.photos.push(new FormControl());
  }

  getHotel(id: number): void {
    console.log('getHotel' + id);
    // (this.store.dispatch(new hotelActions.GetHotelById(id)));
    // this.hotel$=this.store.pipe(select(fromHotel.getHotel))
    this.serviceHotel.getHotel(id)
      .subscribe(
        (hotel: IHotel) => this.onHotelRetrieved(hotel),
        (error: any) => this.errorMessage = <any>error
      );
  }

  onHotelRetrieved(hotel: IHotel): void {
    if (this.hotelForm) {
      this.hotelForm.reset();
    }
    this.hotel = hotel;

    if (this.hotel.id === 0) {
      this.pageTitle = 'Add Hotel';
    } else {
      this.pageTitle = `Edit Hotel: ${this.hotel.title}`;
    }

    // Update the data on the form
    this.hotelForm.patchValue({
      title: this.hotel.title,
      description: this.hotel.description,
      address: this.hotel.address,
      phone: this.hotel.phone,
      picture: this.hotel.picture,
      photos: this.hotel.photos
      ,
      weather: this.hotel.weather.temperature,
      profile: this.hotel.profile.photo,
      stars: this.hotel.stars

    });
    //stars:this.hotel.stars,
    this.hotelForm.setControl('photos', this.fb.array(this.hotel.photos || []));
  }

  deleteHotel(): void {
    if (this.hotel.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.hotel.title}?`)) {
        console.log('delete ' + this.hotel)
        // this.serviceHotel.deleteHotel(this.hotel.id)
        //   .subscribe(
        //     () => this.onSaveComplete(),
        //     (error: any) => this.errorMessage = <any>error
        //   );
      }
    }
  }

  saveHotel(): void {
    if (this.hotelForm.dirty && this.hotelForm.valid) {
      // Copy the form values over the product object values
      let p = Object.assign({}, this.hotel, this.hotelForm.value);
      console.log(p);
      return;
      ((this.hotel && this.hotel.id > 0) ? this.serviceHotel.patchHotel(p) : this.serviceHotel.createHotel(p))
        .subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.errorMessage = <any>error
        );
    } else if (!this.hotelForm.dirty) {
      this.onSaveComplete();
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.hotelForm.reset();
    this.router.navigate(['/hotels']);
  }

}
