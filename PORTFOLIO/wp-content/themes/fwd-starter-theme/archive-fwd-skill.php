<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package FWD_Starter_Theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		
			$taxonomy = 'fwd-skill-category';
			$terms    = get_terms(
				array(
					'taxonomy' => $taxonomy
				)
			);
			if($terms && ! is_wp_error($terms) ){
				foreach($terms as $term){
					$args = array(
						'post_type'      => 'fwd-skill',
						'posts_per_page' => -1,
						'order'          => 'ASC',
						'orderby'        => 'title',
						'tax_query'      => array(
							array(
								'taxonomy' => $taxonomy,
								'field'    => 'slug',
								'terms'    => $term->slug,
							)
						),
					);
					
					$query = new WP_Query( $args );
					
					if ( $query -> have_posts() ) {
						// Output Term name.
						echo '<h2>' . esc_html( $term->name ) . '</h2>';
					
						// Output Navigation.
						while ( $query -> have_posts() ) {
						    $query -> the_post();
						    echo '<a class="skill-links" href="#'. esc_attr( get_the_ID() ) .'">'. esc_html( get_the_title() ) .'</a>';
							if ( function_exists( 'get_field' ) ) {
						
								if ( get_field( 'skills-para' ) ) {
									echo '<h2>' . esc_html( get_field( 'skills-para' ) ) . '</h2>';
								}
							
								if ( get_field( 'languages' ) ) {
									echo '<p>' . esc_html( get_field( 'languages' ) ) . '</p>';
								}
								if ( get_field( 'tools' ) ) {
									echo '<p>' . esc_html( get_field( 'tools' ) ) . '</p>';
								}
							
							}
						}
						wp_reset_postdata();
					
						// Output Content.
						
			
						
			
		
						wp_reset_postdata();
					}
				}
			}
		?>	
			
			
			

	</main><!-- #primary -->

<?php


get_sidebar();
get_footer();
