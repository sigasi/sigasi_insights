/*
 *
 *	Admin jQuery Functions
 *	------------------------------------------------
 *	Swift Framework
 * 	Copyright Swift Ideas 2015 - http://www.swiftideas.com
 *
 */

jQuery(
    function( jQuery ) {

        // FIELD VARIABLES

        var $sidebar_config = jQuery( '#sf_sidebar_config' ),
            $left_sidebar = jQuery( '#sf_left_sidebar' ).parent().parent(),
            $right_sidebar = jQuery( '#sf_right_sidebar' ).parent().parent();
        var $revslider_alias = jQuery( '#sf_rev_slider_alias' ).parent().parent(),
            $layerslider_id = jQuery( '#sf_layerslider_id' ).parent().parent();
        var $thumb_type = jQuery( '#sf_thumbnail_type' ),
            $thumb_image = jQuery( '#sf_thumbnail_image_description' ).parent().parent(),
            $thumb_video = jQuery( '#sf_thumbnail_video_url' ).parent().parent(),
            $thumb_gallery = jQuery( '#sf_thumbnail_gallery_description' ).parent().parent(),
            $thumb_audio = jQuery( '#sf_thumbnail_audio_url' ).parent().parent();
        $thumb_videomp4 = jQuery( '#sf_thumbnail_video_mp4' ).parent().parent();
        $thumb_videoogg = jQuery( '#sf_thumbnail_video_ogg' ).parent().parent();
        $thumb_videowebm = jQuery( '#sf_thumbnail_video_webm' ).parent().parent();
        var $link_type = jQuery( '#sf_thumbnail_link_type' ),
            $link_url = jQuery( '#sf_thumbnail_link_url' ).parent().parent(),
            $link_image = jQuery( 'a[data-field_id="sf_thumbnail_link_image"]' ).parent().parent(),
            $link_video = jQuery( '#sf_thumbnail_link_video_url' ).parent().parent();
        var $use_thumb_content = jQuery( '#sf_thumbnail_content_main_detail' ),
            $detail_type = jQuery( '#sf_detail_type' ),
            $detail_image = jQuery( '#sf_detail_image_description' ).parent().parent(),
            $detail_video = jQuery( '#sf_detail_video_url' ).parent().parent(),
            $detail_gallery = jQuery( '#sf_detail_gallery_description' ).parent().parent(),
            $detail_slider = jQuery( '#sf_detail_rev_slider_alias' ).parent().parent(),
            $detail_layerslider = jQuery( '#sf_detail_layer_slider_alias' ).parent().parent(),
            $detail_custom = jQuery( '#sf_custom_media' ).parent().parent(),
            $detail_audio = jQuery( '#sf_detail_audio_url' ).parent().parent();
        $detail_videomp4 = jQuery( '#sf_detail_video_mp4' ).parent().parent();
        $detail_videoogg = jQuery( '#sf_detail_video_ogg' ).parent().parent();
        $detail_videowebm = jQuery( '#sf_detail_video_webm' ).parent().parent();
        var $page_title_style = jQuery( '#sf_page_title_style' ),
            $page_title_text_two = jQuery( '#sf_page_title_two' ).parent().parent(),
            $page_title_fancy_image = jQuery( '#sf_page_title_image_description' ).parent().parent(),
            $page_title_fancy_text_style = jQuery( '#sf_page_title_text_style' ).parent().parent(),
            $page_title_text_align = jQuery( '#sf_page_title_text_align' ).parent().parent();
            $page_bg_color_title = jQuery( '#sf_bg_color_title' ).parent().parent();
            $page_bg_opacity_title = jQuery( '#sf_bg_opacity_title' ).parent().parent().parent();

        if ( $sidebar_config.val() == "no-sidebars" ) {
            $left_sidebar.css( 'display', 'none' );
            $right_sidebar.css( 'display', 'none' );
        } else if ( $sidebar_config.val() == "left-sidebar" ) {
            $left_sidebar.css( 'display', 'block' );
            $right_sidebar.css( 'display', 'none' );
        } else if ( $sidebar_config.val() == "right-sidebar" ) {
            $right_sidebar.css( 'display', 'block' );
            $left_sidebar.css( 'display', 'none' );
        } else if ( $sidebar_config.val() == "both-sidebars" ) {
            $left_sidebar.css( 'display', 'block' );
            $right_sidebar.css( 'display', 'block' );
        }

        if ( $thumb_type.val() == "none" ) {
            $thumb_image.css( 'display', 'none' );
            $thumb_video.css( 'display', 'none' );
            $thumb_gallery.css( 'display', 'none' );
            $thumb_audio.css( 'display', 'none' );
            $thumb_videomp4.css( 'display', 'none' );
            $thumb_videoogg.css( 'display', 'none' );
            $thumb_videowebm.css( 'display', 'none' );
        } else if ( $thumb_type.val() == "image" ) {
            $thumb_image.css( 'display', 'block' );
            $thumb_video.css( 'display', 'none' );
            $thumb_gallery.css( 'display', 'none' );
            $thumb_audio.css( 'display', 'none' );
            $thumb_videomp4.css( 'display', 'none' );
            $thumb_videoogg.css( 'display', 'none' );
            $thumb_videowebm.css( 'display', 'none' );
        } else if ( $thumb_type.val() == "video" ) {
            $thumb_image.css( 'display', 'none' );
            $thumb_video.css( 'display', 'block' );
            $thumb_gallery.css( 'display', 'none' );
            $thumb_audio.css( 'display', 'none' );
            $thumb_videomp4.css( 'display', 'none' );
            $thumb_videoogg.css( 'display', 'none' );
            $thumb_videowebm.css( 'display', 'none' );
        } else if ( $thumb_type.val() == "slider" ) {
            $thumb_image.css( 'display', 'none' );
            $thumb_video.css( 'display', 'none' );
            $thumb_gallery.css( 'display', 'block' );
            $thumb_audio.css( 'display', 'none' );
            $thumb_videomp4.css( 'display', 'none' );
            $thumb_videoogg.css( 'display', 'none' );
            $thumb_videowebm.css( 'display', 'none' );
        } else if ( $thumb_type.val() == "audio" ) {
            $thumb_image.css( 'display', 'none' );
            $thumb_video.css( 'display', 'none' );
            $thumb_gallery.css( 'display', 'none' );
            $thumb_audio.css( 'display', 'block' );
            $thumb_videomp4.css( 'display', 'none' );
            $thumb_videoogg.css( 'display', 'none' );
            $thumb_videowebm.css( 'display', 'none' );
        } else if ( $thumb_type.val() == "sh-video" ) {
            $thumb_image.css( 'display', 'none' );
            $thumb_video.css( 'display', 'none' );
            $thumb_gallery.css( 'display', 'none' );
            $thumb_audio.css( 'display', 'none' );
            $thumb_videomp4.css( 'display', 'block' );
            $thumb_videoogg.css( 'display', 'block' );
            $thumb_videowebm.css( 'display', 'block' );
        }

        if ( $link_type.val() == "link_to_post" ) {
            $link_url.css( 'display', 'none' );
            $link_image.css( 'display', 'none' );
            $link_video.css( 'display', 'none' );
        } else if ( $link_type.val() == "link_to_url" || $link_type.val() == "link_to_url_nw" ) {
            $link_url.css( 'display', 'block' );
            $link_image.css( 'display', 'none' );
            $link_video.css( 'display', 'none' );
        } else if ( $link_type.val() == "lightbox_thumb" ) {
            $link_url.css( 'display', 'none' );
            $link_image.css( 'display', 'none' );
            $link_video.css( 'display', 'none' );
        } else if ( $link_type.val() == "lightbox_image" ) {
            $link_url.css( 'display', 'none' );
            $link_image.css( 'display', 'block' );
            $link_video.css( 'display', 'none' );
        } else if ( $link_type.val() == "lightbox_video" ) {
            $link_url.css( 'display', 'none' );
            $link_image.css( 'display', 'none' );
            $link_video.css( 'display', 'block' );
        }

        if ( $use_thumb_content.is( ':checked' ) ) {
            $detail_type.parent().parent().css( 'display', 'none' );
            $detail_image.css( 'display', 'none' );
            $detail_video.css( 'display', 'none' );
            $detail_gallery.css( 'display', 'none' );
            $detail_slider.css( 'display', 'none' );
            $detail_layerslider.css( 'display', 'none' );
            $detail_custom.css( 'display', 'none' );
            $detail_audio.css( 'display', 'none' );
            $detail_videomp4.css( 'display', 'none' );
            $detail_videoogg.css( 'display', 'none' );
            $detail_videowebm.css( 'display', 'none' );
        } else {
            $detail_type.parent().parent().css( 'display', 'block' );
            if ( $detail_type.val() == "none" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "image" ) {
                $detail_image.css( 'display', 'block' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "video" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'block' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "slider" || $detail_type.val() == "gallery-stacked" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'block' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "layer-slider" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'block' );
                $detail_layerslider.css( 'display', 'block' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "custom" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'block' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "audio" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'block' );
                $detail_videomp4.css( 'display', 'none' );
                $detail_videoogg.css( 'display', 'none' );
                $detail_videowebm.css( 'display', 'none' );
            } else if ( $detail_type.val() == "sh-video" ) {
                $detail_image.css( 'display', 'none' );
                $detail_video.css( 'display', 'none' );
                $detail_gallery.css( 'display', 'none' );
                $detail_slider.css( 'display', 'none' );
                $detail_layerslider.css( 'display', 'none' );
                $detail_custom.css( 'display', 'none' );
                $detail_audio.css( 'display', 'none' );
                $detail_videomp4.css( 'display', 'block' );
                $detail_videoogg.css( 'display', 'block' );
                $detail_videowebm.css( 'display', 'block' );
            }
        }

        if ( $page_title_style.val() == "standard" ) {
            $page_title_text_two.css( 'display', 'none' );
            $page_title_fancy_image.css( 'display', 'none' );
            $page_title_fancy_text_style.css( 'display', 'none' );
            $page_title_text_align.css( 'display', 'none' );
            $page_bg_color_title.css( 'display', 'none' );
            $page_bg_opacity_title.css( 'display', 'none' );
        }


        // ON CHANGE SHOW/HIDE CONFIG

        $page_title_style.change(
            function() {
                if ( jQuery( this ).val() == "standard" ) {
                    $page_title_text_two.css( 'display', 'none' );
                    $page_title_fancy_image.css( 'display', 'none' );
                    $page_title_fancy_text_style.css( 'display', 'none' );
                    $page_title_text_align.css( 'display', 'none' );
                    $page_bg_color_title.css( 'display', 'none' );
                    $page_bg_opacity_title.css( 'display', 'none' );
                } else {
                    $page_title_text_two.css( 'display', 'block' );
                    $page_title_fancy_image.css( 'display', 'block' );
                    $page_title_fancy_text_style.css( 'display', 'block' );
                    $page_title_text_align.css( 'display', 'block' );
                    $page_bg_color_title.css( 'display', 'block' );
                    $page_bg_opacity_title.css( 'display', 'block' );
                }
            }
        );

        $sidebar_config.change(
            function() {
                if ( jQuery( this ).val() == "no-sidebars" ) {
                    $left_sidebar.css( 'display', 'none' );
                    $right_sidebar.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "left-sidebar" ) {
                    $left_sidebar.css( 'display', 'block' );
                    $right_sidebar.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "right-sidebar" ) {
                    $right_sidebar.css( 'display', 'block' );
                    $left_sidebar.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "both-sidebars" ) {
                    $left_sidebar.css( 'display', 'block' );
                    $right_sidebar.css( 'display', 'block' );
                }
            }
        );

        $thumb_type.change(
            function() {
                if ( jQuery( this ).val() == "none" ) {
                    $thumb_image.css( 'display', 'none' );
                    $thumb_video.css( 'display', 'none' );
                    $thumb_gallery.css( 'display', 'none' );
                    $thumb_audio.css( 'display', 'none' );
                    $thumb_videomp4.css( 'display', 'none' );
                    $thumb_videoogg.css( 'display', 'none' );
                    $thumb_videowebm.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "image" ) {
                    $thumb_image.css( 'display', 'block' );
                    $thumb_video.css( 'display', 'none' );
                    $thumb_gallery.css( 'display', 'none' );
                    $thumb_audio.css( 'display', 'none' );
                    $thumb_videomp4.css( 'display', 'none' );
                    $thumb_videoogg.css( 'display', 'none' );
                    $thumb_videowebm.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "video" ) {
                    $thumb_image.css( 'display', 'none' );
                    $thumb_video.css( 'display', 'block' );
                    $thumb_gallery.css( 'display', 'none' );
                    $thumb_audio.css( 'display', 'none' );
                    $thumb_videomp4.css( 'display', 'none' );
                    $thumb_videoogg.css( 'display', 'none' );
                    $thumb_videowebm.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "slider" ) {
                    $thumb_image.css( 'display', 'none' );
                    $thumb_video.css( 'display', 'none' );
                    $thumb_gallery.css( 'display', 'block' );
                    $thumb_audio.css( 'display', 'none' );
                    $thumb_videomp4.css( 'display', 'none' );
                    $thumb_videoogg.css( 'display', 'none' );
                    $thumb_videowebm.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "audio" ) {
                    $thumb_image.css( 'display', 'none' );
                    $thumb_video.css( 'display', 'none' );
                    $thumb_gallery.css( 'display', 'none' );
                    $thumb_audio.css( 'display', 'block' );
                    $thumb_videomp4.css( 'display', 'none' );
                    $thumb_videoogg.css( 'display', 'none' );
                    $thumb_videowebm.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "sh-video" ) {
                    $thumb_image.css( 'display', 'none' );
                    $thumb_video.css( 'display', 'none' );
                    $thumb_gallery.css( 'display', 'none' );
                    $thumb_audio.css( 'display', 'none' );
                    $thumb_videomp4.css( 'display', 'block' );
                    $thumb_videoogg.css( 'display', 'block' );
                    $thumb_videowebm.css( 'display', 'block' );
                }
            }
        );

        $link_type.change(
            function() {
                if ( jQuery( this ).val() == "link_to_post" ) {
                    $link_url.css( 'display', 'none' );
                    $link_image.css( 'display', 'none' );
                    $link_video.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "link_to_url" || $link_type.val() == "link_to_url_nw" ) {
                    $link_url.css( 'display', 'block' );
                    $link_image.css( 'display', 'none' );
                    $link_video.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "lightbox_thumb" ) {
                    $link_url.css( 'display', 'none' );
                    $link_image.css( 'display', 'none' );
                    $link_video.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "lightbox_image" ) {
                    $link_url.css( 'display', 'none' );
                    $link_image.css( 'display', 'block' );
                    $link_video.css( 'display', 'none' );
                } else if ( jQuery( this ).val() == "lightbox_video" ) {
                    $link_url.css( 'display', 'none' );
                    $link_image.css( 'display', 'none' );
                    $link_video.css( 'display', 'block' );
                }
            }
        );

        $use_thumb_content.change(
            function() {
                if ( $use_thumb_content.is( ':checked' ) ) {
                    $detail_type.parent().parent().css( 'display', 'none' );
                    $detail_image.css( 'display', 'none' );
                    $detail_video.css( 'display', 'none' );
                    $detail_gallery.css( 'display', 'none' );
                    $detail_slider.css( 'display', 'none' );
                    $detail_layerslider.css( 'display', 'none' );
                    $detail_custom.css( 'display', 'none' );
                    $detail_audio.css( 'display', 'none' );
                    $detail_videomp4.css( 'display', 'none' );
                    $detail_videoogg.css( 'display', 'none' );
                    $detail_videowebm.css( 'display', 'none' );
                } else {
                    $detail_type.parent().parent().css( 'display', 'block' );
                    if ( $detail_type.val() == "none" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "image" ) {
                        $detail_image.css( 'display', 'block' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "video" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'block' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "slider" || $detail_type.val() == "gallery-stacked" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'block' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "layer-slider" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'block' );
                        $detail_layerslider.css( 'display', 'block' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "custom" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'block' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "audio" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'block' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "sh-video" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'block' );
                        $detail_videoogg.css( 'display', 'block' );
                        $detail_videowebm.css( 'display', 'block' );
                    }
                }
            }
        );

        $detail_type.change(
            function() {
                if ( $use_thumb_content.is( ':checked' ) ) {
                    $detail_type.parent().parent().css( 'display', 'none' );
                    $detail_image.css( 'display', 'none' );
                    $detail_video.css( 'display', 'none' );
                    $detail_gallery.css( 'display', 'none' );
                    $detail_slider.css( 'display', 'none' );
                    $detail_layerslider.css( 'display', 'none' );
                    $detail_audio.css( 'display', 'none' );
                    $detail_videomp4.css( 'display', 'none' );
                    $detail_videoogg.css( 'display', 'none' );
                    $detail_videowebm.css( 'display', 'none' );
                } else {
                    $detail_type.parent().parent().css( 'display', 'block' );
                    if ( jQuery( this ).val() == "none" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( jQuery( this ).val() == "image" ) {
                        $detail_image.css( 'display', 'block' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( jQuery( this ).val() == "video" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'block' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( jQuery( this ).val() == "slider" || $detail_type.val() == "gallery-stacked" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'block' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( jQuery( this ).val() == "layer-slider" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'block' );
                        $detail_layerslider.css( 'display', 'block' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "custom" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'block' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "audio" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'block' );
                        $detail_videomp4.css( 'display', 'none' );
                        $detail_videoogg.css( 'display', 'none' );
                        $detail_videowebm.css( 'display', 'none' );
                    } else if ( $detail_type.val() == "sh-video" ) {
                        $detail_image.css( 'display', 'none' );
                        $detail_video.css( 'display', 'none' );
                        $detail_gallery.css( 'display', 'none' );
                        $detail_slider.css( 'display', 'none' );
                        $detail_layerslider.css( 'display', 'none' );
                        $detail_custom.css( 'display', 'none' );
                        $detail_audio.css( 'display', 'none' );
                        $detail_videomp4.css( 'display', 'block' );
                        $detail_videoogg.css( 'display', 'block' );
                        $detail_videowebm.css( 'display', 'block' );
                    }
                }
            }
        );


        // Page Slider
        var $page_slider_type = jQuery( '#sf_page_slider' );

        showHideSliderMeta( $page_slider_type.val() );
        $page_slider_type.change(
            function() {
                showHideSliderMeta( jQuery( this ).val() );
            }
        );

        function showHideSliderMeta( $selected ) {
            if ( $selected == "swift-slider" ) {
                jQuery( '.pageslider-revslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-masterslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-layerslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-swift-slider' ).css( 'display', 'block' );
            } else if ( $selected == "revslider" ) {
                jQuery( '.pageslider-revslider' ).css( 'display', 'block' );
                jQuery( '.pageslider-masterslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-layerslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-swift-slider' ).css( 'display', 'none' );
            } else if ( $selected == "layerslider" ) {
                jQuery( '.pageslider-revslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-masterslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-layerslider' ).css( 'display', 'block' );
                jQuery( '.pageslider-swift-slider' ).css( 'display', 'none' );
            } else if ( $selected == "masterslider" ) {
                jQuery( '.pageslider-revslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-masterslider' ).css( 'display', 'block' );
                jQuery( '.pageslider-layerslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-swift-slider' ).css( 'display', 'none' );
            } else if ( $selected == "none" ) {
                jQuery( '.pageslider-revslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-masterslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-layerslider' ).css( 'display', 'none' );
                jQuery( '.pageslider-swift-slider' ).css( 'display', 'none' );
            }
        }


        jQuery( '#media-items' ).bind(
            'DOMNodeInserted', function() {
                jQuery( 'input[value="Insert into Post"]' ).each(
                    function() {
                        jQuery( this ).attr( 'value', 'Use This Image' );
                    }
                );
            }
        );

        jQuery( '.custom_upload_image_button' ).click(
            function() {
                formfield = jQuery( this ).siblings( '.custom_upload_image' );
                preview = jQuery( this ).siblings( '.custom_preview_image' );
                tb_show( '', 'media-upload.php?type=image&TB_iframe=true' );
                window.send_to_editor = function( html ) {
                    imgurl = jQuery( 'img', html ).attr( 'src' );
                    classes = jQuery( 'img', html ).attr( 'class' );
                    id = classes.replace( /(.*?)wp-image-/, '' );
                    formfield.val( id );
                    preview.attr( 'src', imgurl );
                    tb_remove();
                }
                return false;
            }
        );

        jQuery( '.custom_clear_image_button' ).click(
            function() {
                var defaultImage = jQuery( this ).parent().siblings( '.custom_default_image' ).text();
                jQuery( this ).parent().siblings( '.custom_upload_image' ).val( '' );
                jQuery( this ).parent().siblings( '.custom_preview_image' ).attr( 'src', defaultImage );
                return false;
            }
        );

        jQuery( '.repeatable-add' ).click(
            function() {
                field = jQuery( this ).closest( 'td' ).find( '.custom_repeatable li:last' ).clone( true );
                fieldLocation = jQuery( this ).closest( 'td' ).find( '.custom_repeatable li:last' );
                jQuery( 'input', field ).val( '' ).attr(
                    'name', function( index, name ) {
                        return name.replace(
                            /(\d+)/, function( fullMatch, n ) {
                                return Number( n ) + 1;
                            }
                        );
                    }
                )
                field.insertAfter( fieldLocation, jQuery( this ).closest( 'td' ) )
                return false;
            }
        );

        jQuery( '.repeatable-remove' ).click(
            function() {
                jQuery( this ).parent().remove();
                return false;
            }
        );


        // ALT BACKGROUND

        var altBackgroundValue = jQuery( '.rwmb-meta-box' ).find( '#sf_page_title_bg' ).val();
        if ( altBackgroundValue != "" ) {
            jQuery( '.rwmb-meta-box' ).find( '.meta-altbg-preview' ).addClass( altBackgroundValue );
        }

        jQuery( '#sf_page_title_bg' ).live(
            'change', function() {
                jQuery( '.meta-altbg-preview' ).attr( 'class', 'meta-altbg-preview' );
                jQuery( '.meta-altbg-preview' ).addClass( jQuery( this ).val() );
            }
        );


        // COLOUR SCHEME FUNCTION
        jQuery( "#sf-export-scheme-dl" ).click(
            function( e ) {

                e.preventDefault(); // prevent link

                var the_link = jQuery( this ).attr( "href" );

                var file_name = jQuery( "#sf-export-scheme-name" ).val();

                if ( file_name ) {

                    file_name = file_name.replace( /\W/g, '' ); // let's attempt to filter this a bit

                    jQuery( "#sf-export-scheme-name" ).val( file_name );

                    the_link = the_link + "&file_name=" + file_name;

                    window.open( the_link );


                } else {

                    alert( "You must enter a scheme name." );

                }

                //console.log ( file_name );

            }
        );


		// TABBED META BOXES
		var tabBoxes = jQuery('#page_heading_meta_box,#page_style_meta_box,#page_background_meta_box,#portfolio_page_heading_meta_box,#page_header_meta_box,#page_meta_box,#thumbnail_meta_box,#alt_thumbnail_meta_box,#portfolio_meta_box,#detail_media_meta_box,#masonry_thumbnail_meta_box,#post_meta_box,#product_meta_box,#team_meta_box,#client_meta_box,#testimonials_meta_box,#gallery_meta_box,#sidebar_meta_box_page,#sidebar_meta_box_post,#sidebar_meta_box_product,#reviews_meta_box,#download_meta_box,#edd_product_prices,#edd_product_files,#edd_product_notes,#atcf_campaign_updates,#atcf_campaign_video');
			
		//create the menu with javascript
		function sf_setup_metatabs() {
		
			var sfMetaBox = jQuery('#sf_meta_box');
			
			if ( sfMetaBox.length === 0 ) {
				return;
			}
			
			jQuery(tabBoxes).appendTo('#sf-tabbed-meta-boxes');
			jQuery(tabBoxes).hide().removeClass('hide-if-no-js'); 
						
			for (var a = 0, b = tabBoxes.length; a < b; a++ ) {
				newClass = 'editor-tab' + a;
				jQuery(tabBoxes[a]).addClass(newClass);
			}
				
			var menu_html = '<ul id="sf-meta-box-tabs" class="clearfix">\n';	
			var total_hidden = 0;	
			for (var i = 0, n = tabBoxes.length; i < n; i++ ) {
				var target_id = jQuery(tabBoxes[i]).attr('id');
				var tab_name = jQuery(tabBoxes[i]).find('.hndle > span').text();
				var tab_class = "";
				
				if (jQuery(tabBoxes[i]).hasClass('hide-if-js')) {
					//tab_class = "user-hidden";
					total_hidden++;
				}
				
				menu_html = menu_html + '\n<li id="li-'+ target_id +'" class="'+tab_class+'"><a href="#" rel="editor-tab' + i + '">' + tab_name + '</a></li>';
			}
			menu_html = menu_html + '\n</ul>';
			
			if (tabBoxes.length === total_hidden) {
				//jQuery('.sf-meta-tabs-wrap').addClass('all-hidden');
			}
			
			jQuery('#sf-tabbed-meta-boxes').before(menu_html);
			jQuery('#sf-meta-box-tabs a:first').addClass('active');	
		}
		
		if (tabBoxes.length > 0) {
			sf_setup_metatabs();
			jQuery('.editor-tab0').addClass('active').show();
		}
		
		jQuery('.sf-meta-tabs-wrap').on('click', '.handlediv', function() {
			var metaBoxWrap = jQuery(this).parent();
			if (metaBoxWrap.hasClass('closed')) {
				metaBoxWrap.removeClass('closed');
			} else {
				metaBoxWrap.addClass('closed');
			}		
		});
		
		jQuery('#sf-meta-box-tabs li').on('click', 'a', function() {
			jQuery(tabBoxes).removeClass('active').hide();
			jQuery('#sf-meta-box-tabs a').removeClass('active');
			
			target = jQuery(this).attr('rel');
			
			jQuery(this).addClass('active');
			jQuery('.' + target).addClass('active').show();
			
			return false;
		});

        //	jQuery('.hide-postbox-tog').on('click', function() {
        //		var target = jQuery(this).attr('value');
        //		if (jQuery(this).is(':checked')) {
        //			jQuery('#li-' + target).removeClass('user-hidden');
        //			jQuery('#'+ target).removeClass('hide-if-js');
        //		} else {
        //			jQuery('#li-' + target).addClass('user-hidden');
        //			jQuery('#'+ target).addClass('hide-if-js');
        //		}
        //		var total_hidden = jQuery('#sf-meta-box-tabs').find('.user-hidden').length;
        //		var total_boxes = jQuery('#sf-tabbed-meta-boxes').find('> div').length;
        //		if (tabBoxes.length > total_hidden) {
        //			jQuery('.sf-meta-tabs-wrap').removeClass('all-hidden');
        //		} else {
        //			jQuery('.sf-meta-tabs-wrap').addClass('all-hidden');
        //		}
        //		return true;
        //	});


    }
);
