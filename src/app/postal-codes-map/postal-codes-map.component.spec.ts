import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodesMapComponent } from './postal-codes-map.component';

describe('PostalCodesMapComponent', () => {
  let component: PostalCodesMapComponent;
  let fixture: ComponentFixture<PostalCodesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalCodesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalCodesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
