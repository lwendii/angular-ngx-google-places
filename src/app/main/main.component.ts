import { Component, OnInit } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // https://maps.googleapis.com/maps/api/distancematrix/json
  // ?destinations=New%20York%20City%2C%20NY
  // &origins=Washington%2C%20DC
  // &units=imperial
  // &key=YOUR_API_KEY
  title = 'rou';
  //Local Variable defined
  formattedaddress = " ";
  options = {
    // types: ['city'],
    componentRestrictions: { country: "DE" }
  } as Options;

  constructor() { }

  ngOnInit(): void {}

  public AddressChange(address: any) {
    console.log(address);
    this.formattedaddress = address.formatted_address
}

}
