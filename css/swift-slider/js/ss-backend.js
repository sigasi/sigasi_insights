/*
 *
 *	Swift Slider Backend JS
 *	------------------------------------------------
 *	Swift Slider
 * 	Copyright Swift Ideas 2015 - http://www.swiftideas.com
 *
 */

/*global jQuery */
(function() {

    // USE STRICT
    "use strict";

    var main = {
        init: function() {

            // Tab up our meta boxes, if we're on the swift slider post type
            if ( jQuery( 'body' ).hasClass( 'post-type-swift-slider' ) ) {
                main.metaBoxTabs();
            }

        },
        metaBoxTabs: function() {

            // meta box variable
            var ssMetaBoxes = jQuery( '#ss_background,#ss_background_video,#ss_content' );

            // Add the tabbed asset
            jQuery( '#normal-sortables' ).before( '<div class="ss-meta-tabs-wrap postbox"><div class="handlediv" title="Click to toggle"><br></div><h3 class="hndle"><span>Slide Setup</span></h3><div id="ss-tabbed-meta-boxes"></div></div>' );

            // Append our meta boxes to the tabbed asset
            jQuery( ssMetaBoxes ).appendTo( '#ss-tabbed-meta-boxes' );
            jQuery( ssMetaBoxes ).hide().removeClass( 'hide-if-no-js' );

            // Add a tab class to each meta box asset
            for ( var a = 0, b = ssMetaBoxes.length; a < b; a++ ) {
                var tabClass = 'editor-tab' + a;
                jQuery( ssMetaBoxes[a] ).addClass( tabClass );
            }

            // Set up the tabbed asset tabs
            var tabs_html = '<ul id="ss-meta-box-tabs" class="clearfix">\n';
            for ( var i = 0, n = ssMetaBoxes.length; i < n; i++ ) {
                var target_id = jQuery( ssMetaBoxes[i] ).attr( 'id' );
                var tab_name = jQuery( ssMetaBoxes[i] ).find( '.hndle > span' ).text();
                tabs_html = tabs_html + '\n<li id="li-' + target_id + '"><a href="#" rel="editor-tab' + i + '">' + tab_name + '</a></li>';
            }
            tabs_html = tabs_html + '\n</ul>';

            // Add the tabs, and set the first tab to be active
            jQuery( '#ss-tabbed-meta-boxes' ).before( tabs_html );
            jQuery( '#ss-meta-box-tabs a:first' ).addClass( 'active' );

            // Set first meta box as active
            jQuery( '.editor-tab0' ).addClass( 'active' ).show();

            // Change tab on click
            jQuery( '#ss-meta-box-tabs li' ).on(
                'click', 'a', function() {
                    jQuery( ssMetaBoxes ).removeClass( 'active' ).hide();
                    jQuery( '#ss-meta-box-tabs a' ).removeClass( 'active' );

                    var target = jQuery( this ).attr( 'rel' );

                    jQuery( this ).addClass( 'active' );
                    jQuery( '.' + target ).addClass( 'active' ).show();

                    return false;
                }
            );
        }
    }

    var onReady = {
        init: function() {
            main.init();
        }
    };

    jQuery( document ).ready( onReady.init );

})( jQuery );