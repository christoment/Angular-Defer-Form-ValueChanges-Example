import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { defer, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  candidates = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Bell pepper',
    'Bilberry',
    'Blackberry',
    'Blackcurrant',
    'Blood orange',
    'Blueberry',
    'Boysenberry',
    'Breadfruit',
    'Canary melon',
    'Cantaloupe',
    'Cherimoya',
    'Cherry',
    'Chili pepper',
    'Clementine',
    'Cloudberry',
    'Coconut',
    'Cranberry',
    'Cucumber',
    'Currant',
    'Damson',
    'Date',
    'Dragonfruit',
    'Durian',
    'Eggplant',
    'Elderberry',
    'Feijoa',
    'Fig',
    'Goji berry',
    'Gooseberry',
    'Grape',
    'Grapefruit',
    'Guava',
    'Honeydew',
    'Huckleberry',
    'Jackfruit',
    'Jambul',
    'Jujube',
    'Kiwi fruit',
    'Kumquat',
    'Lemon',
    'Lime',
    'Loquat',
    'Lychee',
    'Mandarine',
    'Mango',
    'Mulberry',
    'Nectarine',
    'Nut',
    'Olive',
    'Orange',
    'Papaya',
    'Passionfruit',
    'Peach',
    'Pear',
    'Persimmon',
    'Physalis',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Pomelo',
    'Quince',
    'Raisin',
    'Rambutan',
    'Raspberry',
    'Redcurrant',
    'Rock melon',
    'Salal berry',
    'Satsuma',
    'Star fruit',
    'Strawberry',
    'Tamarillo',
    'Tangerine',
    'Tomato',
    'Watermelon',
  ];

  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  example2Subscription?: Subscription;

  exampleResult$?: Observable<string[]>;
  exampleDeferResult$?: Observable<string[]>;
  isComponentVisible = false;

  ngOnInit(): void {
    // Without defer
    this.exampleResult$ = this.form.valueChanges.pipe(
      startWith(this.form.value),
      map((value) => this.candidates.filter((candidate) => !value.search || candidate.toLocaleLowerCase().indexOf(value.search.toLocaleLowerCase()) >= 0))
    );

    // With defer
    this.exampleDeferResult$ = defer(() => this.form.valueChanges.pipe(
      startWith(this.form.value),
      map((value) => this.candidates.filter((candidate) => !value.search || candidate.toLocaleLowerCase().indexOf(value.search.toLocaleLowerCase()) >= 0))
    ));

    // Delayed adding
    setTimeout(() => {
      this.form.patchValue({
        search: 'Ap',
      });
    }, 100);
  }

  showComponent() {
    this.isComponentVisible = true;
  }

  hideComponent() {
    this.isComponentVisible = false;
  }
}
