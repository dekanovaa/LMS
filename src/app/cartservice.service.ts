import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  carts: Cart[] = [
    {
      id: 1,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'https://lms.tuit.uz/dashboard/news/detailed/76',
    },
    {
      id: 2,
      title: 'Qayta oqish',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 3,
      title: 'Eslatma',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 4,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 5,
      title: 'yakuniy nazorat',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 6,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 7,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 8,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
    {
      id: 9,
      title: 'xurmatli talaba',
      text: 'cwrvfegggggggggbb',
      date: new Date(),
      link: 'hhtbdbfyec',
    },
  ];
}
