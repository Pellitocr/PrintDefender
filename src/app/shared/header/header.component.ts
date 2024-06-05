import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
	// 12. Nice Select Js
	$('.tp-header-search-category select, .tp-shop-area select, .tp-checkout-area select, .profile__area select').niceSelect();

    this.headerCurrency();
    this.headerLanguage();
    this.headerSetting();
    this.openCart();

	// 09. Body overlay Js
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".tp-search-area").removeClass("opened");
      $(".cartmini__area").removeClass("cartmini-opened");
      $(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
      $(".body-overlay").removeClass("opened");
    });


    	////////////////////////////////////////////////////
	// 06. Search Js
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-search-close-btn").on("click", function () {
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

  	// 05. Offcanvas Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});
  }

  public headerCurrency(){
    const element = document.getElementById('tp-header-currency-toggle');

    // for header currency
    if ($("#tp-header-currency-toggle").length > 0) {
      window.addEventListener('click', function(event){
  
        if(element != null){
          if (element.contains(<Node>(event!.target))){
            $(".tp-header-currency ul").toggleClass("tp-currency-list-open");
          }
          else{
            $(".tp-header-currency ul").removeClass("tp-currency-list-open");
          }
        }
  
      });
    }
  }

  public headerLanguage(){
    const element = document.getElementById('tp-header-lang-toggle');

	// for header language
    if ($("#tp-header-lang-toggle").length > 0) {
      window.addEventListener('click', function(event){
    
        if(element != null){ 
          if (element.contains(<Node>(event!.target))){
            $(".tp-header-lang ul").toggleClass("tp-lang-list-open");
          }
          else{
            $(".tp-header-lang ul").removeClass("tp-lang-list-open");
          }
        }

      });
    }
  }

  public headerSetting(){
    const element = document.getElementById('tp-header-setting-toggle');

    // for header setting
    if ($("#tp-header-setting-toggle").length > 0) {
      window.addEventListener('click', function(event){
    
        if(element != null) {
          if (element.contains(<Node>(event!.target))){
            $(".tp-header-setting ul").toggleClass("tp-setting-list-open");
          }
          else{
            $(".tp-header-setting ul").removeClass("tp-setting-list-open");
          }
        }
      });
    }
  }

  public openCart(){
	// 07. cartmini Js
    $(".cartmini-open-btn").on("click", function () {
      $(".cartmini__area").addClass("cartmini-opened");
      $(".body-overlay").addClass("opened");
    });
  
  
    $(".cartmini-close-btn").on("click", function () {
      $(".cartmini__area").removeClass("cartmini-opened");
      $(".body-overlay").removeClass("opened");
    });
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  var btn_wrapper = $('.back-to-top-wrapper');
  if (window.pageYOffset > 300) {
    btn_wrapper.addClass('back-to-top-btn-show');
  } else {
    btn_wrapper.removeClass('back-to-top-btn-show');
  }
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
}

}
