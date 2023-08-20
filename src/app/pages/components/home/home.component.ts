import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  apiData: any;
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    nav: true,
    navText: [
      "<i class='fa-solid fa-chevron-up'></i>",
      "<i class='fa-solid fa-chevron-down'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };

  slides = [
    {
      id: 'slide2',
      headTitle:
        'رؤيـتنـــــــــــــــــــــــــــــــــــــا ــــــــــــــــــــــــ',
      title:
        'التطور من شركة تركز علي الخدمة الداخلية إلي شركة تركز علي السوق الخارجية',
      description:
        'ملتزمون بتقديم خدمات هندسية أحترافية عالية الجودة لتعزيز المكان الذي يعيش فيه عملائنا , يجمع نهجنا بين التصميم الاستثنائي والحلول المبتكرة',
      image: '../../../../assets/images/home/slide2.png',
    },
    {
      id: 'slide3',
      headTitle: 'أحلامك تتحقق علي أرض الواقع ــــــــــــــــــــــــ',
      title: 'نقدم خدمات التصميم الهندسي ,الديكوري والاستشارات الهندسية',
      description:
        'ليه تكلم اكتر من مهندس عشان تعمل تصاميم كاملة لما ممكن تكلم مكتب واحد فيه كل المهندسين للتصاميم المعمارية والانشائية والكهربية والميكانكية .',
      image: '../../../../assets/images/home/slide3.png',
    },
  ];
  constructor() {}

  ngOnInit() {}

  fun() {
    alert('Asmaa');
  }
}
