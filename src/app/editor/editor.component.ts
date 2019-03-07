import { Component, OnInit, ElementRef } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    monaco.editor.create(this.elementRef.nativeElement, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark'
    });
  }

}
