import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalCodesListComponent } from './postal-codes-list.component';

describe('PostalCodesListComponent', () => {
  let component: PostalCodesListComponent;
  let fixture: ComponentFixture<PostalCodesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostalCodesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostalCodesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
