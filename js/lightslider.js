function theSlider() {
	/**
	 * theSlider()
	 * special owl carousel with an infinite number of CMS image zones as content.
	 * this function loads the necessary scripts and CSS files asynchronously before starting the slider.
	 * this both makes it slightly faster and much easier for a one-click setup.
	 * 
	 * This file also makes sure that if there are no images in the slider, then the slider is hidden.
	 *  
	 * note that the base CSS file still needs to be loaded, preferably in the foot.
	 * use https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css
	 * 
	 * @cite http://rivettsmarine.brockettcreative.com/services
	 * @author Michael Born
	 * @date 08/162017
	*/
	var sliderDiv = $(".theSlider"),
		owlDiv = sliderDiv.find(".cmsRegion");
	if (sliderDiv.find(".cms-image").length > 0) {
		/*	if the slider DOES have images, show the slider!*/
		sliderDiv.removeClass("theSlider--empty");
	}
	
	function initSlider() {
// 		console.info("setting up slider on element:",selector);

		owlDiv.addClass("owl-carousel");
		owlDiv.owlCarousel({
		    loop:true,
		    margin:40,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        500:{
		            items:2
		        },
		        800:{
		            items:3
		        }
		    }
		});
	}
	
	loadScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js',initSlider);
}