import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsComponent } from './gps.component';

describe('GpsComponent', () => {
  let component: GpsComponent;
  let fixture: ComponentFixture<GpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GpsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'locationApp'`, () => {
    const fixture = TestBed.createComponent(GpsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('locationApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GpsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('locationApp app is running!');
  });
});