import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;
declare var Swiper: any

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {

	public Collection: String ='';

  constructor(private element: ElementRef, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
		if (params['id'] && params['id']) {
		  const id = params['id'];
			this.Collection = id;
			this.ecommerce();
		} 
		else if (!params['id']) {
		  this.router.navigateByUrl('Not-Found');
		}
	  });




  
  }

  public ecommerce(){

    $('.tp-style-variation-btn').on('click',  (e: any) => {
			$(e.currentTarget).addClass('active').siblings().removeClass('active');
		});

    $('.tp-size-variation-btn').on('click',  (e: any) => {
			$(e.currentTarget).addClass('active').siblings().removeClass('active');
		});

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

		$(".filter-open-dropdown-btn").on("click", function () {
			$(".tp-filter-dropdown-area").toggleClass('filter-dropdown-opened');
		});
		// 12. Nice Select Js
		$('.tp-header-search-category select, .tp-shop-area select, .tp-checkout-area select, .profile__area select').niceSelect();
  }

}
