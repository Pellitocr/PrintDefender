import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    this.runAllScripts();


  }

  public runAllScripts(){
    	// 09. Body overlay Js
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".tp-search-area").removeClass("opened");
        $(".cartmini__area").removeClass("cartmini-opened");
        $(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
        $(".body-overlay").removeClass("opened");
      });
    // 12. Nice Select Js
      $('.tp-header-search-category select, .tp-shop-area select, .tp-checkout-area select, .profile__area select').niceSelect();
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


      $(".cartmini-open-btn").on("click", function () {
        $(".cartmini__area").addClass("cartmini-opened");
        $(".body-overlay").addClass("opened");
      });
    
    
      $(".cartmini-close-btn").on("click", function () {
        $(".cartmini__area").removeClass("cartmini-opened");
        $(".body-overlay").removeClass("opened");
      });

    const header = document.getElementById('tp-header-lang-toggle');

    // for header language
      if ($("#tp-header-lang-toggle").length > 0) {
        window.addEventListener('click', function(event){
      
          if(header != null){ 
            if (header.contains(<Node>(event!.target))){
              $(".tp-header-lang ul").toggleClass("tp-lang-list-open");
            }
            else{
              $(".tp-header-lang ul").removeClass("tp-lang-list-open");
            }
          }
  
        });
      }

      const setting = document.getElementById('tp-header-setting-toggle');

      // for header setting
      if ($("#tp-header-setting-toggle").length > 0) {
        window.addEventListener('click', function(event){
      
          if(setting != null) {
            if (setting.contains(<Node>(event!.target))){
              $(".tp-header-setting ul").toggleClass("tp-setting-list-open");
            }
            else{
              $(".tp-header-setting ul").removeClass("tp-setting-list-open");
            }
          }
        });
      }
      const currency = document.getElementById('tp-header-currency-toggle');

      // for header currency
      if ($("#tp-header-currency-toggle").length > 0) {
        window.addEventListener('click', function(event){
    
          if(currency != null){
            if (currency.contains(<Node>(event!.target))){
              $(".tp-header-currency ul").toggleClass("tp-currency-list-open");
            }
            else{
              $(".tp-header-currency ul").removeClass("tp-currency-list-open");
            }
          }
    
        });
      }

      const languageMobile = document.getElementById('tp-offcanvas-lang-toggle');

      if ($("#tp-offcanvas-lang-toggle").length > 0) {
        window.addEventListener('click', function(event){
        
          if(languageMobile != null){
            if (languageMobile.contains(<Node>(event!.target))){
              $(".tp-lang-list").toggleClass("tp-lang-list-open");
            }
            else{
              $(".tp-lang-list").removeClass("tp-lang-list-open");
            }
          }

        });
      }

      const currencyMobile = document.getElementById('tp-offcanvas-currency-toggle');

      if ($("#tp-offcanvas-currency-toggle").length > 0) {
        window.addEventListener('click', function(event){

          if(currencyMobile != null){
        
            if (currencyMobile.contains(<Node>(event!.target))){
              $(".tp-currency-list").toggleClass("tp-currency-list-open");
            }
            else{
              $(".tp-currency-list").removeClass("tp-currency-list-open");
            }
          }

        });
      }

      	// 07. cartmini Js
        $(".cartmini-open-btn").on("click", function () {
          $(".cartmini__area").addClass("cartmini-opened");
          $(".body-overlay").addClass("opened");
        });
      
      
        $(".cartmini-close-btn").on("click", function () {
          $(".cartmini__area").removeClass("cartmini-opened");
          $(".body-overlay").removeClass("opened");
        });

        //TENGO QUE BREGAR EL HEADER PARA MOBILE

	////////////////////////////////////////////////////
	// 04. Menu Controls JS
	// if($('.tp-category-menu-content').length && $('.tp-category-mobile-menu').length){
	// 	let navContent = document.querySelector(".tp-category-menu-content").outerHTML;
	// 	let mobileNavContainer = document.querySelector(".tp-category-mobile-menu");
	// 	mobileNavContainer.innerHTML = navContent;
	
	// 	$('.tp-offcanvas-category-toggle').on('click', function(){
	// 		$(this).siblings().find('nav').slideToggle();
	// 	});
		
	
	// 	let arrow = $(".tp-category-mobile-menu .has-dropdown > a");
	
	// 	arrow.each(function () {
	// 		let self = $(this);
	// 		let arrowBtn = document.createElement("BUTTON");
	// 		arrowBtn.classList.add("dropdown-toggle-btn");
	// 		arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
	// 		self.append(function () {
	// 		  return arrowBtn;
	// 		});
	
	// 		self.find("button").on("click", function (e) {
	// 		  e.preventDefault();
	// 		  let self = $(this);
	// 		  self.toggleClass("dropdown-opened");
	// 		  self.parent().toggleClass("expanded");
	// 		  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
	// 		  self.parent().parent().children(".tp-submenu").slideToggle();
			  
	
	// 		});
	
	// 	  });
	// }

	// if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
	// 	let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
	// 	let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
	// 	mobileNavContainer.innerHTML = navContent;
	
	
	// 	let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
	// 	arrow.each(function () {
	// 		let self = $(this);
	// 		let arrowBtn = document.createElement("BUTTON");
	// 		arrowBtn.classList.add("dropdown-toggle-btn");
	// 		arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
	// 		self.append(function () {
	// 		  return arrowBtn;
	// 		});
	
	// 		self.find("button").on("click", function (e) {
	// 		  e.preventDefault();
	// 		  let self = $(this);
	// 		  self.toggleClass("dropdown-opened");
	// 		  self.parent().toggleClass("expanded");
	// 		  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
	// 		  self.parent().parent().children(".tp-submenu").slideToggle();
			  
	
	// 		});
	
	// 	  });
	// }

	// $(".tp-category-menu-toggle").on("click", function () {
	// 	$(".tp-category-menu > nav > ul").slideToggle();
	// });

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
