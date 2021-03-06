import { EventEmitter } from "@angular/core";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output
} from "@angular/core";
import { COORD, emptyBoard, BoardProcessed } from "../generator";

@Component({
  selector: "app-sudoku",
  templateUrl: "./sudoku.component.html",
  styleUrls: ["./sudoku.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuComponent implements OnInit {
  @Input() board: BoardProcessed = emptyBoard;

  constructor() {}

  ngOnInit(): void {}

  isInternal(n: number, s: number): boolean {
    console.log(Math.sqrt(s));
    console.log(n);
    if (n % Math.sqrt(s) === 0) {
      return true;
    } else {
      return false;
    }
  }
}
