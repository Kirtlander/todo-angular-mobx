import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoOverviewComponent } from './todo-overview.component';
import { RootStore } from '../state/root-store';
import { TodoStore } from '../state/todo-store';

describe('TodoOverviewComponent', () => {
  let component: TodoOverviewComponent;
  let fixture: ComponentFixture<TodoOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ TodoOverviewComponent ],
      providers: [RootStore, TodoStore],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
