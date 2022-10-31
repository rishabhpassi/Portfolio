<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package FWD_Starter_Theme
 */

get_header();
?>

	<main id="primary" class="site-main">

		

			<header class="page-header">
			<h1>projects</h1>
			
				<?php
				the_archive_description( '<div class="archive-description">', '</div>' );
				
				?>
			</header><!-- .page-header -->

			<?php
				$args = array(
					'post_type'      => 'fwd-project',
					'posts_per_page' => -1,
					
				);

				$query = new WP_Query( $args );

				if ( $query->have_posts() ) : ?>
					<section class="projects">
						<?php
						while( $query->have_posts() ) :
							
							$query->the_post(); ?>
							
							<article class="project-item">
								<a href="<?php the_permalink(); ?>">
									<h3><?php the_title(); ?></h3>
									<?php
								
									the_post_thumbnail('large');
									?>
									
								</a>
								<?php
								
								the_excerpt();
								
								?>
							</article>
							<?php
						endwhile;
						wp_reset_postdata();
						?>
					</section>
					<?php
				endif;
				?>
			
			
			

			
	

	</main><!-- #primary -->

<?php

get_footer();
