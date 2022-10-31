

                    <?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package FWD_Starter_Theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();
          

			get_template_part( 'template-parts/content', get_post_type() );
            if ( function_exists( 'get_field' ) ) {
						
										
									
                if ( get_field( 'language_used' ) ) {
                    echo '<p>' . esc_html( get_field( 'language_used' ) ) . '</p>';
                }
                if ( get_field( 'project_length' ) ) {
                    echo '<p>' . esc_html( get_field( 'project_length' ) ) . '</p>';
                }
                if ( get_field( 'overview' ) ) {
                    echo '<p>' . esc_html( get_field( 'overview' ) ) . '</p>';
                }
                $hell = get_field( 'screenshot');
								foreach($hell as $onehell){
									echo '<img src="'.$onehell.'" alt="rve"></img>';
								}
                

            
            }

			the_post_navigation(
				array(
					'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Previous:', 'fwd' ) . '</span> <span class="nav-title">%title</span>',
					'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Next:', 'fwd' ) . '</span> <span class="nav-title">%title</span>',
				)
			);

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #primary -->

<?php
get_footer();
