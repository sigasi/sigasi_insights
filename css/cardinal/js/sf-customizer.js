/*
 *
 *	Live Customiser Script
 *	------------------------------------------------
 *	Swift Framework
 * 	Copyright Swift Ideas 2015 - http://www.swiftideas.com
 *
 */
(function( $ ) {

    $( 'html, body' ).css( 'height', 'auto' );

    /////////////////////////////////////////////
    // MAIN STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[design_style_type]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'body' ).removeClass( 'minimal-design bold-design bright-design' );
                    $( 'body' ).addClass( to + '-design' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[accent_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.recent-post figure,span.highlighted,span.dropcap4,.flickr-widget li,.portfolio-grid li,.wpcf7 input.wpcf7-submit[type="submit"],.woocommerce-page nav.woocommerce-pagination ul li span.current,.woocommerce nav.woocommerce-pagination ul li span.current,figcaption .product-added,.woocommerce .wc-new-badge,.yith-wcwl-wishlistexistsbrowse a,.yith-wcwl-wishlistaddedbrowse a,.woocommerce .widget_layered_nav ul li.chosen > *,.woocommerce .widget_layered_nav_filters ul li a,.sticky-post-icon,figure.animated-overlay figcaption,.sf-button.accent,.sf-button.sf-icon-reveal.accent,.progress .bar,.sf-icon-box-animated .back,.labelled-pricing-table .column-highlight .lpt-button-wrap a.accent,.progress.standard .bar,.woocommerce .order-info,.woocommerce .order-info mark,.slideout-filter ul li.selected a,.blog-aux-options li.selected a' ).css(
                        'background-color', to ? to : ''
                    );
                    $( '#copyright a,.portfolio-item .portfolio-item-permalink,.read-more-link,.blog-item .read-more,.blog-item-details a,.author-link,.comment-meta .edit-link a,.comment-meta .comment-reply a,#reply-title small a,ul.member-contact,ul.member-contact li a,span.dropcap2,.spb_divider.go_to_top a,.love-it-wrapper .loved,.comments-likes .loved span.love-count,#header-translation p a,.caption-details-inner .details span > a,.caption-details-inner .chart span,.caption-details-inner .chart i,#swift-slider .flex-caption-large .chart i,.woocommerce .star-rating span,.sf-super-search .search-options .ss-dropdown > span,.sf-super-search .search-options input,.sf-super-search .search-options .ss-dropdown ul li .fa-check,#swift-slider .flex-caption-large .loveit-chart span,#swift-slider .flex-caption-large a,.progress-bar-wrap .progress-value' ).css(
                        'color', to ? to : ''
                    );
                    $( '.bypostauthor .comment-wrap .comment-avatar,a[rel="tooltip"],.sf-icon-box-animated .back' ).css(
                        'border-color', to ? to : ''
                    );
                    $( '.spb_impact_text .spb_call_text' ).css( 'border-left-color', to ? to : '' );
                    $( '.sf-super-search .search-options .ss-dropdown > span,.sf-super-search .search-options input' ).css(
                        'border-bottom-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[accent_alt_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.recent-post figure,span.highlighted,span.dropcap4,.flickr-widget li,.portfolio-grid li,.wpcf7 input.wpcf7-submit[type="submit"],.woocommerce-page nav.woocommerce-pagination ul li span.current,.woocommerce nav.woocommerce-pagination ul li span.current,figcaption .product-added,.woocommerce .wc-new-badge,.yith-wcwl-wishlistexistsbrowse a,.yith-wcwl-wishlistaddedbrowse a,.woocommerce .widget_layered_nav ul li.chosen > *,.woocommerce .widget_layered_nav_filters ul li a,.sticky-post-icon,figure.animated-overlay figcaption .thumb-info h4,figure.animated-overlay figcaption .thumb-info h5,.slideout-filter ul li a,.slideout-filter ul li.selected a,.blog-aux-options li.selected a,.sf-button.accent,.sf-button.sf-icon-reveal.accent,.sf-icon-box-animated .back,.sf-icon-box-animated .back h3,.woocommerce-page nav.woocommerce-pagination ul li span.current,.woocommerce nav.woocommerce-pagination ul li span.current,li.product figcaption a.product-added,.woocommerce .order-info,.woocommerce .order-info mark' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[secondary_accent_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.related-item figure,article.type-post #respond .form-submit input#submit,.show-menu,.flexslider ul.slides,.loved-item .loved-count,.subscribers-list li > a.social-circle' ).css(
                        'background-color', to ? to : ''
                    );
                    $( '#top-bar .show-menu,#swift-slider .flex-caption .comment-chart i,#swift-slider .flex-caption .comment-chart span,.sidebar .widget_calendar tfoot a,.widget_sf_infocus_widget .infocus-item h5 a' ).css(
                        'color', to ? to : ''
                    );
                    $( '#calendar_wrap caption' ).css( 'border-bottom-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[secondary_accent_alt_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.show-menu,#swift-slider .flex-caption-large,#swift-slider .flex-caption-large h1 a,#swift-slider .flex-caption-large .comment-chart i,.loved-item .loved-count,.subscribers-list li > a.social-circle,.sidebar .widget_calendar tbody tr > td a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // MAIN STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[page_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'body' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[inner_page_bg_transparent]', function( value ) {
            value.bind(
                function( to ) {
                    if ( to === "transparent" ) {
                        $( '#main-container' ).css( 'background-color', 'transparent' );
                    } else {
                        $( '#main-container' ).css( 'background-color', '' );
                    }
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[inner_page_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#main-container, .tm-toggle-button-wrap a, ul.bar-styling li > a, ul.bar-styling li > span, ul.bar-styling li > div, ul.bar-styling li > form input, .widget.widget_lip_most_loved_widget li, .spb_portfolio_carousel_widget .portfolio-item, .standard-post-content, .spb_tabs .ui-tabs .ui-tabs-panel, .ui-tabs .ui-tabs-nav li.ui-tabs-active a' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[section_divide_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.owl-pagination .owl-page span, .loved-item .loved-count > i, .standard-post-date' ).css(
                        'background-color', to ? to : ''
                    );
                    $( '.pagination-wrap li a, .pagination-wrap li span, .pagination-wrap li span.expand, ul.bar-styling li > a, ul.bar-styling li > div, ul.page-numbers li > a, ul.page-numbers li > span, .curved-bar-styling, ul.bar-styling li > form input, input[type="text"], input[type="email"], input[type="password"], textarea, select, .wpcf7 input[type="text"], .wpcf7 input[type="email"], .wpcf7 textarea, .wpcf7 select, .ginput_container input[type="text"], .ginput_container input[type="email"], .ginput_container textarea, .ginput_container select, .mymail-form input[type="text"], .mymail-form input[type="email"], .mymail-form textarea, .mymail-form select, input[type="date"], input[type="tel"], input.input-text, input[type="number"], input[type="submit"], #header-section #main-nav, .ajax-search-wrap, .ajax-search-results, .search-result-pt .search-result, .page-content, .page-heading, .read-more-button, .widget ul li, .widget.widget_lip_most_loved_widget li, .widget.widget_lip_most_loved_widget li, .widget .wp-tag-cloud li a, .widget_calendar #calendar_wrap, .widget_calendar th, .widget_calendar tbody tr > td, .widget_calendar tbody tr > td.pad, .sidebar .widget hr, .portfolio-item, .masonry-items .portfolio-item figure, .mini-blog-item-wrap, .mini-items .mini-alt-wrap, .mini-items .mini-alt-wrap .quote-excerpt, .mini-items .mini-alt-wrap .link-excerpt, .masonry-items .blog-item .quote-excerpt, .masonry-items .blog-item .link-excerpt, .standard-post-content .quote-excerpt, .standard-post-content .link-excerpt, .timeline, .post-info, .author-info-wrap, .body-text .link-pages, .page-content .link-pages, .search-item-img .img-holder, .mini-items .blog-item-details, .share-links, .single-portfolio .share-links, .single .pagination-wrap, ul.post-filter-tabs li a, .client-item figure, .spb_divider, .spb_divider.go_to_top_icon1, .spb_divider.go_to_top_icon2, .testimonials > li, .jobs > li, .spb_impact_text, .tm-toggle-button-wrap, .tm-toggle-button-wrap a, .portfolio-details-wrap, .spb_divider.go_to_top a, .widget_search form input, .spb_tabs .ui-tabs .ui-tabs-panel, .spb_content_element .ui-tabs .ui-tabs-nav, .ui-tabs .ui-tabs-nav li, .spb_tour .ui-tabs .ui-tabs-nav li a, .spb_tour.span3 .ui-tabs .ui-tabs-nav li, .toggle-wrap .spb_toggle, .spb_toggle_content, .spb_box_text.whitestroke .box-content-wrap, .testimonials.carousel-items li .testimonial-text, .horizontal-break, .woocommerce nav.woocommerce-pagination ul li a, .woocommerce nav.woocommerce-pagination ul li span, .modal-body .comment-form-rating, ul.checkout-process, #billing .proceed, ul.my-account-nav > li, .woocommerce #payment, .woocommerce-checkout p.thank-you, .woocommerce .order_details, .woocommerce-page .order_details, .woocommerce .products .product figure .cart-overlay .yith-wcwl-add-to-wishlist, #product-accordion .panel, .review-order-wrap, #buddypress .activity-meta a, #buddypress .acomment-options a, #buddypress #member-group-links li a, .bbp-topic-action #favorite-toggle a, .bbp-topic-action #subscription-toggle a, .bbp-single-topic-meta a, .bbp-topic-tags a, #bbpress-forums li.bbp-body ul.forum, #bbpress-forums li.bbp-body ul.topic, #bbpress-forums li.bbp-header, #bbpress-forums li.bbp-footer, #bbp-user-navigation ul li a, .bbp-pagination-links a, #bbp-your-profile fieldset input, #bbp-your-profile fieldset textarea, #bbp-your-profile, #bbp-your-profile fieldset' ).css(
                        'border-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[alt_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.modal-header, .testimonials.carousel-items li .testimonial-text, .widget .wp-tag-cloud li a, .masonry-items .portfolio-item-details, .search-item-img .img-holder, .masonry-items .blog-item .masonry-item-wrap, .bold-design .spb_accordion .spb_accordion_section > h3.ui-state-default, .bold-design .nav-tabs > li a' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // BREADCRUMB STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[breadcrumb_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#breadcrumbs' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[breadcrumb_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#breadcrumbs, #breadcrumbs i' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[breadcrumb_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#breadcrumbs a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // TOP BAR STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[topbar_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#top-bar' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[topbar_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#top-bar' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[topbar_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#top-bar a, #top-bar .menu > li > a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[topbar_divider_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#top-bar .menu li' ).css( 'border-left-color', to ? to : '' );
                    $( '#top-bar .menu li' ).css( 'border-right-color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // HEADER STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[header_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.header-wrap, .vertical-header .header-wrap #header-section, .ajax-search-wrap' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[header_bg_transparent]', function( value ) {
            value.bind(
                function( to ) {
                    if ( to === "transparent" ) {
                        $( '.header-wrap, .vertical-header .header-wrap #header-section' ).css(
                            'background-color', to ? 'transparent' : ''
                        );
                    }
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[header_border_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.header-wrap, #header-section .is-sticky .sticky-header, #header-section.header-5 #header, .vertical-header .header-wrap, .vertical-header-right .header-wrap' ).css(
                        'border-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[header_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.header-left, .header-right' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[header_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.header-left a, .header-right a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // NAVIGATION STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[nav_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#main-nav, .header-wrap[class*="page-header-naked"] #header-section .is-sticky #main-nav, #header-section .is-sticky .sticky-header, #header-section.header-5 #header, .header-wrap[class*="page-header-naked"] #header .is-sticky .sticky-header, .header-wrap[class*="page-header-naked"] #header-section.header-5 #header .is-sticky .sticky-header' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.ajax-search-wrap input[type="text"], .search-result-pt h6, .no-search-results h6, .search-result h5 a, nav .menu > li.menu-item > a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_selected_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'nav .menu li.current-menu-ancestor > a, nav .menu li.current-menu-item > a, nav .menu li.current-scroll-item > a, #mobile-menu .menu ul li.current-menu-item > a' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_selected_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'nav .menu li.current-menu-ancestor > a, nav .menu li.current-menu-item > a, nav .menu li.current-scroll-item > a, #mobile-menu .menu ul li.current-menu-item > a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_sm_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'nav .menu ul.sub-menu' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_sm_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'nav .menu ul.sub-menu li.menu-item > a, nav .menu ul.sub-menu li > span' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_sm_selected_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#header-languages .current-language, nav .menu ul li.current-menu-ancestor > a, nav .menu ul li.current-menu-item > a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_divider]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'nav .menu ul.sub-menu li, nav.mega-menu li .mega .sub .sub-menu, nav.mega-menu li .mega .sub .sub-menu li, nav.mega-menu li .sub-container.non-mega li, nav.mega-menu li .sub li.mega-hdr' ).css(
                        'border-top-style', to ? to : ''
                    );
                    $( 'nav.mega-menu li .sub li.mega-hdr' ).css( 'border-right-style', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[nav_divider_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#main-nav, #main-nav ul.menu > li, #main-nav ul.menu > li:first-child, #main-nav ul.menu > li:first-child .full-center nav#main-navigation ul.menu > li, .full-center nav.float-alt-menu ul.menu > li, .bag-header, .bag-product, .bag-empty, .wishlist-empty' ).css(
                        'border-color', to ? to : ''
                    );
                    $( 'nav .menu ul.sub-menu li, nav.mega-menu li .mega .sub .sub-menu, nav.mega-menu li .mega .sub .sub-menu li, nav.mega-menu li .sub-container.non-mega li, nav.mega-menu li .sub li.mega-hdr' ).css(
                        'border-top-color', to ? to : ''
                    );
                    $( 'nav.mega-menu li .sub li.mega-hdr' ).css( 'border-right-color', to ? to : '' );
                    $( '#main-nav .header-right ul.menu > li, .wishlist-item' ).css(
                        'border-left-color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // OVERLAY MENU STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[overlay_menu_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#overlay-menu' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[overlay_menu_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#overlay-menu nav ul li a, .overlay-menu-open a.overlay-menu-link, .overlay-menu-open #logo h1, .overlay-menu-open .header-left, .overlay-menu-open .header-right, .overlay-menu-open .header-left a, .overlay-menu-open .header-right a, a.overlay-menu-link span' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // MOBILE MENU STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[mobile_menu_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#mobile-menu-wrap, #mobile-cart-wrap' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[mobile_menu_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#mobile-menu-wrap, #mobile-cart-wrap, .mobile-search-form input[type="text"]' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[mobile_menu_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#mobile-menu-wrap a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[mobile_menu_divider_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.mobile-search-form input[type="text"], #mobile-cart-wrap .shopping-bag-item > a.cart-contents, #mobile-cart-wrap .bag-product, ' ).css(
                        'border-bottom-color', to ? to : ''
                    );
                    $( '.mobile-cart-menu li' ).css( 'border-color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // FOOTER STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[footer_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#footer' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[footer_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#footer, #footer p, #footer h6' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[footer_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#footer a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[footer_border_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#footer .widget ul li, #footer .widget_categories ul, #footer .widget_archive ul, #footer .widget_nav_menu ul, #footer .widget_recent_comments ul, #footer .widget_meta ul, #footer .widget_recent_entries ul, #footer .widget_product_categories ul, #copyright, #copyright nav .menu li, #footer .widget_calendar #calendar_wrap, #footer .widget_calendar th, #footer .widget_calendar tbody tr > td, #footer .widget_calendar tbody tr > td.pad, #footer .widget hr' ).css(
                        'border-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[copyright_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#copyright' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[copyright_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#copyright p' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[copyright_link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#copyright a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // PROMO BAR STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[promo_bar_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#base-promo, .sf-promo-bar' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[promo_bar_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '#base-promo > p, #base-promo.footer-promo-text > a, #base-promo.footer-promo-arrow > a, .sf-promo-bar > p, .sf-promo-bar.promo-text > a, .sf-promo-bar.promo-arrow > a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // PAGE HEADING STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[page_heading_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.page-heading' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[page_heading_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.page-heading h1, .page-heading h3' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[page_heading_text_align]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.page-heading .heading-text, .fancy-heading .heading-text' ).css( 'text-align', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // BODY STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[body_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'body' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[body_alt_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.recent-post .post-details, .portfolio-item h5.portfolio-subtitle, .search-item-content time, .search-item-content span, .portfolio-details-wrap .date, .post-item-details .comments-likes a i, .post-item-details .comments-likes a span, ul.products li.product .product-details .posted_in a, #buddypress #members-list .item-meta .activity, #buddypress .activity-header p, span.bbp-admin-links a, li.bbp-forum-info .bbp-forum-content, ' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[link_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'a, .ui-widget-content a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h1_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h1, h1 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h2_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h2, h2 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h3_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h3, h3 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h4_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h4, h4 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h5_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h5, h5 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[h6_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'h6, h6 a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[overlay_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'figure.animated-overlay figcaption' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[overlay_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'figure.animated-overlay figcaption *' ).css( 'color', to ? to : '' );
                    $( 'figcaption .thumb-info .name-divide' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // POST STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[article_review_bar_alt_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.review-bar' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[article_review_bar_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.review-bar .bar, .review-overview-wrap .overview-circle' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[article_review_bar_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.review-bar .bar, .review-overview-wrap .overview-circle' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[article_extras_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.article-extras' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[article_np_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.post-pagination-wrap' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[article_np_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.post-pagination-wrap .next-article > *, .post-pagination-wrap .next-article a, .post-pagination-wrap .prev-article > *, .post-pagination-wrap .prev-article a' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // INPUT STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[input_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'input[type="text"], input[type="email"], input[type="password"], textarea, select, .wpcf7 input[type="text"], .wpcf7 input[type="email"], .wpcf7 textarea, .wpcf7 select, .ginput_container input[type="text"], .ginput_container input[type="email"], .ginput_container textarea, .ginput_container select, .mymail-form input[type="text"], .mymail-form input[type="email"], .mymail-form textarea, .mymail-form select, input[type="date"], input[type="tel"], input.input-text, input[type="number"]' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[input_text_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( 'input[type="text"], input[type="email"], input[type="password"], textarea, select, .wpcf7 input[type="text"], .wpcf7 input[type="email"], .wpcf7 textarea, .wpcf7 select, .ginput_container input[type="text"], .ginput_container input[type="email"], .ginput_container textarea, .ginput_container select, .mymail-form input[type="text"], .mymail-form input[type="email"], .mymail-form textarea, .mymail-form select, input[type="date"], input[type="tel"], input.input-text, input[type="number"]' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // CONTENT SLIDER STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[tweet_slider_bg]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_tweets_slider_widget' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[tweet_slider_text]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_tweets_slider_widget .tweet-text, .spb_tweets_slider_widget .tweet-icon' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[tweet_slider_link]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_tweets_slider_widget .tweet-text a' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[testimonial_slider_bg]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_testimonial_slider_widget' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[testimonial_slider_text]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_testimonial_slider_widget .testimonial-text, .spb_testimonial_slider_widget cite, .spb_testimonial_slider_widget .testimonial-icon' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // SHORTCODES STYLING
    /////////////////////////////////////////////
    wp.customize(
        'sf_customizer[icon_container_bg_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.sf-icon-cont, .sf-hover .sf-icon-cont, .sf-hover .sf-icon-box-hr' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[sf_icon_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.sf-icon' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[sf_icon_alt_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.sf-hover .sf-icon-cont .sf-icon, .sf-hover .sf-icon-cont .sf-icon, .sf-icon-box.sf-icon-box-boxed-one .sf-icon, .sf-icon-box.sf-icon-box-boxed-three .sf-icon' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[boxed_content_color]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.spb_box_text.coloured .box-content-wrap' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[share_button_bg]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.article-share label' ).css( 'background-color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[share_button_text]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.article-share label' ).css( 'color', to ? to : '' );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[bold_rp_bg]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.posts-type-bold .recent-post .details-wrap, .masonry-items .blog-item .details-wrap, .blog-grid-items .blog-item > div' ).css(
                        'background-color', to ? to : ''
                    );
                }
            );
        }
    );
    wp.customize(
        'sf_customizer[bold_rp_text]', function( value ) {
            value.bind(
                function( to ) {
                    $( '.posts-type-bold .recent-post .details-wrap, .masonry-items .blog-item .details-wrap, .blog-grid-items .blog-item > div' ).css(
                        'color', to ? to : ''
                    );
                }
            );
        }
    );


    /////////////////////////////////////////////
    // PAGE META
    /////////////////////////////////////////////
    wp.customize(
        'blogname', function( value ) {
            value.bind(
                function( to ) {
                    $( '#logo h1' ).html( to );
                }
            );
        }
    );
    //	wp.customize( 'blogdescription', function( value ) {
    //		value.bind( function( to ) {
    //			$( '#site-description' ).html( to );
    //		} );
    //	} );

})( jQuery );