import { Component, ElementRef, OnInit } from '@angular/core';

declare var $: any;
declare var Swiper: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor(private element: ElementRef){}

  ngOnInit(): void {

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

    
    $('.tp-size-variation-btn').on('click',  (e: any) => {
			$(e.currentTarget).addClass('active').siblings().removeClass('active');
		});

    
	var slider = new Swiper('.tp-product-related-slider-active', {
		slidesPerView: 4,
		spaceBetween: 24,
		loop: true,
		enteredSlides: false,
		pagination: {
			el: ".tp-related-slider-dot",
			clickable: true,
			renderBullet: function (index: any, className: any) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-related-slider-button-next",
			prevEl: ".tp-related-slider-button-prev",
		},

		scrollbar: {
			el: '.tp-related-swiper-scrollbar',
			draggable: true,
			dragClass: 'tp-swiper-scrollbar-drag',
			snapOnRelease: true,
		  },

		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
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

}
