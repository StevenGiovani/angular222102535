import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrl: './mahasiswa.component.css',
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    $('#table1').DataTable();
  }

  ngOnInit(): void {}
}
