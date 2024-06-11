import { Component, ElementRef, OnInit } from '@angular/core';
import { collection } from 'src/app/models/collection.interface';
import { HomeService } from './home.service';
import { UtilsService } from 'src/app/core/services/utils.service';

declare var $: any;
declare var Swiper: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public QuickView: any;
  public myCollection: collection[] = [];

  constructor(private element: ElementRef, private homeSv: HomeService, private utils : UtilsService){}

  ngOnInit(): void {

    this.QuickView = (window as any).$(this.element.nativeElement).find('#producQuickViewModal');

    this.utils.showLoading();
    this.loadCollections();

    this.MainSlider();
    this.weeksFeatured();

 
    

    $('.tp-product-quick-view-btn').on('click',  () => {
			this.quickView();
		});


  }

  public loadCollections(){
    this.homeSv.getCollections().subscribe(
      result=>{
        console.log(result)
        this.myCollection = result.data
        
        setTimeout(() => {
          this.CategorySlider();
          this.utils.hideLoading();
        }, 1);
      }, error =>{

      }
    )
  }

  public quickView(){

    this.ecommerce();
  }

  public ecommerce(){


    $('.tp-cart-minus').on('click',  () => {
      var $input = $(this.element.nativeElement).find('#tp-cart-input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });

    $('.tp-cart-plus').on('click',  () => {
      var $input = $(this.element.nativeElement).find('#tp-cart-input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });

    $('.tp-style-variation-btn').on('click',  (e: any) => {
      $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });

    $('.tp-size-variation-btn').on('click',  (e: any) => {
      $(e.currentTarget).addClass('active').siblings().removeClass('active');
    });
  }

  public MainSlider(){
  // home 2 fashion
	var slider = new Swiper('.tp-slider-active-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
    autoplay: {
      delay: 5000,
    },
		effect: 'fade',
		// Navigation arrows
		navigation: {
			nextEl: ".tp-slider-2-button-next",
			prevEl: ".tp-slider-2-button-prev",
		},
		pagination: {
			el: ".tp-slider-2-dot",
			clickable: true,
			renderBullet: function (index: any, className: any) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
	});
  }

  public CategorySlider(){
    var slider = new Swiper('.tp-category-slider-active-2', {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: false,
      enteredSlides: false,
      pagination: {
        el: ".tp-category-slider-dot",
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".tp-category-slider-button-next",
        prevEl: ".tp-category-slider-button-prev",
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragClass: 'tp-swiper-scrollbar-drag',
        snapOnRelease: true,
        },
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 3,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }

  public weeksFeatured(){
    
    var slider = new Swiper('.tp-featured-slider-active', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      enteredSlides: false,
      pagination: {
        el: ".tp-featured-slider-dot",
        clickable: true,
        renderBullet: function (index: any, className: any) {
          return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".tp-featured-slider-button-next",
        prevEl: ".tp-featured-slider-button-prev",
      },
  
      breakpoints: {
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }
  

  // public BannerSlider(){
  //   var slider = new Swiper('.tp-product-banner-slider-active', {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     loop: true,
  //     effect: 'fade',
  //     pagination: {
  //       el: ".tp-product-banner-slider-dot",
  //       clickable: true,
  //       renderBullet: function (index: any, className: any) {
  //         return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
  //       },
  //     },
  
  //   });
  // }

  // public trending(){
  //   var slider = new Swiper('.tp-trending-slider-active', {
  //     slidesPerView: 2,
  //     spaceBetween: 24,
  //     loop: true,
  //     enteredSlides: false,
  //     pagination: {
  //       el: ".tp-trending-slider-dot",
  //       clickable: true,
  //       renderBullet: function (index: any, className: any) {
  //         return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
  //       },
  //     },
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".tp-trending-slider-button-next",
  //       prevEl: ".tp-trending-slider-button-prev",
  //     },
  
  //     breakpoints: {
  //       '1200': {
  //         slidesPerView: 2,
  //       },
  //       '992': {
  //         slidesPerView: 2,
  //       },
  //       '768': {
  //         slidesPerView: 2,
  //       },
  //       '576': {
  //         slidesPerView: 2,
  //       },
  //       '0': {
  //         slidesPerView: 1,
  //       },
  //     },
  //   });
  // }

  // public testimonial(){
  //   var slider = new Swiper('.tp-testimonial-slider-active', {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     loop: true,
  //     pagination: {
  //       el: ".tp-testimonial-slider-dot",
  //       clickable: true,
  //       renderBullet: function (index: any, className: any) {
  //         return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
  //       },
  //     },
  //     // Navigation arrows
  //     navigation: {
  //       nextEl: ".tp-testimonial-slider-button-next",
  //       prevEl: ".tp-testimonial-slider-button-prev",
  //     },
  //   });
  // }


}

