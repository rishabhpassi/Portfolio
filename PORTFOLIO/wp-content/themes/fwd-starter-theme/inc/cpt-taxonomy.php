
<?php

function fwd_register_custom_post_types() {

// Register skills
$labels = array(
    'name'                  => _x( 'skills', 'post type general name' ),
    'singular_name'         => _x( 'skill', 'post type singular name'),
    'menu_name'             => _x( 'skills', 'admin menu' ),
    'name_admin_bar'        => _x( 'skill', 'add new on admin bar' ),
    'add_new'               => _x( 'Add New', 'skill' ),
    'add_new_item'          => __( 'Add New skill' ),
    'new_item'              => __( 'New skill' ),
    'edit_item'             => __( 'Edit skill' ),
    'view_item'             => __( 'View skill' ),
    'all_items'             => __( 'All skills' ),
    'search_items'          => __( 'Search skills' ),
    'parent_item_colon'     => __( 'Parent skills:' ),
    'not_found'             => __( 'No skills found.' ),
    'not_found_in_trash'    => __( 'No skills found in Trash.' ),
    'archives'              => __( 'skill Archives'),
    'insert_into_item'      => __( 'Insert into skill'),
    'uploaded_to_this_item' => __( 'Uploaded to this skill'),
    'filter_item_list'      => __( 'Filter skills list'),
    'items_list_navigation' => __( 'skills list navigation'),
    'items_list'            => __( 'skills list'),
    'featured_image'        => __( 'skill featured image'),
    'set_featured_image'    => __( 'Set skill featured image'),
    'remove_featured_image' => __( 'Remove skill featured image'),
    'use_featured_image'    => __( 'Use as featured image'),
);

$args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'show_in_nav_menus'  => true,
    'show_in_admin_bar'  => true,
    'show_in_rest'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'skills' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-archive',
    'supports'           => array( 'title', 'thumbnail', 'editor' ),
);

register_post_type( 'fwd-skill', $args );

//testimonials Cpt

$labels = array(
    'name'               => _x( 'Testimonials', 'post type general name'  ),
    'singular_name'      => _x( 'Testimonial', 'post type singular name'  ),
    'menu_name'          => _x( 'Testimonials', 'admin menu'  ),
    'name_admin_bar'     => _x( 'Testimonial', 'add new on admin bar' ),
    'add_new'            => _x( 'Add New', 'testimonial' ),
    'add_new_item'       => __( 'Add New Testimonial' ),
    'new_item'           => __( 'New Testimonial' ),
    'edit_item'          => __( 'Edit Testimonial' ),
    'view_item'          => __( 'View Testimonial'  ),
    'all_items'          => __( 'All Testimonials' ),
    'search_items'       => __( 'Search Testimonials' ),
    'parent_item_colon'  => __( 'Parent Testimonials:' ),
    'not_found'          => __( 'No testimonials found.' ),
    'not_found_in_trash' => __( 'No testimonials found in Trash.' ),
);

$args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'show_in_rest'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'testimonials' ),
    'capability_type'    => 'post',
    'has_archive'        => false,
    'hierarchical'       => false,
    'menu_position'      => 7,
    'menu_icon'          => 'dashicons-heart',
    'supports'           => array( 'title', 'editor' ),
    'template'           => array( array( 'core/quote' ) ),
    'template_lock'      => 'all',
);

register_post_type( 'fwd-testimonial', $args );

$labels = array(
    'name'                  => _x( 'projects', 'post type general name' ),
    'singular_name'         => _x( 'project', 'post type singular name'),
    'menu_name'             => _x( 'projects', 'admin menu' ),
    'name_admin_bar'        => _x( 'project', 'add new on admin bar' ),
    'add_new'               => _x( 'Add New', 'project' ),
    'add_new_item'          => __( 'Add New project' ),
    'new_item'              => __( 'New project' ),
    'edit_item'             => __( 'Edit project' ),
    'view_item'             => __( 'View project' ),
    'all_items'             => __( 'All projects' ),
    'search_items'          => __( 'Search projects' ),
    'parent_item_colon'     => __( 'Parent projects:' ),
    'not_found'             => __( 'No projects found.' ),
    'not_found_in_trash'    => __( 'No projects found in Trash.' ),
    'archives'              => __( 'project Archives'),
    'insert_into_item'      => __( 'Insert into project'),
    'uploaded_to_this_item' => __( 'Uploaded to this project'),
    'filter_item_list'      => __( 'Filter projects list'),
    'items_list_navigation' => __( 'projects list navigation'),
    'items_list'            => __( 'projects list'),
    'featured_image'        => __( 'project featured image'),
    'set_featured_image'    => __( 'Set project featured image'),
    'remove_featured_image' => __( 'Remove project featured image'),
    'use_featured_image'    => __( 'Use as featured image'),
);

$args = array(
    'labels'             => $labels,
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'show_in_nav_menus'  => true,
    'show_in_admin_bar'  => true,
    'show_in_rest'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'projects' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-archive',
    'supports'           => array( 'title', 'thumbnail', 'editor' ),
);

register_post_type( 'fwd-project', $args );


}
add_action( 'init', 'fwd_register_custom_post_types' );

function fwd_register_taxonomies() {
// Add skill Category taxonomy
$labels = array(
    'name'              => _x( 'skill Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'skill Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search skill Categories' ),
    'all_items'         => __( 'All skill Category' ),
    'parent_item'       => __( 'Parent skill Category' ),
    'parent_item_colon' => __( 'Parent skill Category:' ),
    'edit_item'         => __( 'Edit skill Category' ),
    'view_item'         => __( 'Vview skill Category' ),
    'update_item'       => __( 'Update skill Category' ),
    'add_new_item'      => __( 'Add New skill Category' ),
    'new_item_name'     => __( 'New skill Category Name' ),
    'menu_name'         => __( 'skill Category' ),
);
$args = array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_in_menu'      => true,
    'show_in_nav_menu'  => true,
    'show_in_rest'      => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'skill-categories' ),
);
register_taxonomy( 'fwd-skill-category', array( 'fwd-skill' ), $args );

        // Add Featured taxonomy
    $labels = array(
        'name'              => _x( 'Featured', 'taxonomy general name' ),
        'singular_name'     => _x( 'Featured', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Featured' ),
        'all_items'         => __( 'All Featured' ),
        'parent_item'       => __( 'Parent Featured' ),
        'parent_item_colon' => __( 'Parent Featured:' ),
        'edit_item'         => __( 'Edit Featured' ),
        'update_item'       => __( 'Update Featured' ),
        'add_new_item'      => __( 'Add New Featured' ),
        'new_item_name'     => __( 'New skill Featured' ),
        'menu_name'         => __( 'Featured' ),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'featured' ),
    );

    register_taxonomy( 'fwd-featured', array( 'fwd-skill' ), $args );



    
    // Add Service Type taxonomy.
    $labels = array(
        'name'              => _x( 'Service Type', 'taxonomy general name' ),
        'singular_name'     => _x( 'Service Type', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Service Type' ),
        'all_items'         => __( 'All Service Types' ),
        'parent_item'       => __( 'Service Type Featured' ),
        'parent_item_colon' => __( 'Service Type Featured:' ),
        'edit_item'         => __( 'Edit Service Type' ),
        'update_item'       => __( 'Update Service Type' ),
        'add_new_item'      => __( 'Add New Service Type' ),
        'new_item_name'     => __( 'New skill Service Type' ),
        'menu_name'         => __( 'Service Type' ),
    );
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_rest'      => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'service-type' ),
    );
    register_taxonomy( 'fwd-service-type', array( 'fwd-service' ), $args );

    // Add project Category taxonomy
    $labels = array(
        'name'              => _x( 'project Categories', 'taxonomy general name' ),
        'singular_name'     => _x( 'project Category', 'taxonomy singular name' ),
        'search_items'      => __( 'Search project Categories' ),
        'all_items'         => __( 'All project Category' ),
        'parent_item'       => __( 'Parent project Category' ),
        'parent_item_colon' => __( 'Parent project Category:' ),
        'edit_item'         => __( 'Edit project Category' ),
        'view_item'         => __( 'Vview project Category' ),
        'update_item'       => __( 'Update project Category' ),
        'add_new_item'      => __( 'Add New project Category' ),
        'new_item_name'     => __( 'New project Category Name' ),
        'menu_name'         => __( 'project Category' ),
    );
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_in_menu'      => true,
        'show_in_nav_menu'  => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'project-categories' ),
    );
    register_taxonomy( 'fwd-project-category', array( 'fwd-project' ), $args );


}
add_action( 'init', 'fwd_register_taxonomies');







function fwd_rewrite_flush() {
fwd_register_custom_post_types();
fwd_register_taxonomies();
flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'fwd_rewrite_flush' );