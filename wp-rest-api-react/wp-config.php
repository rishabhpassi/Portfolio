<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u351156024_portfolio' );

/** Database username */
define( 'DB_USER', 'u351156024_passi' );

/** Database password */
define( 'DB_PASSWORD', 'ExxJT1c[' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'W8&29p7D)Pw84dcNF)hA*U.t_<G&<{R6I&Efp!xb}JDq/8Qy/beVHCoE!7u}W_Xt');
define('SECURE_AUTH_KEY',  'h {|M)wZh042hP&f:=|m6!5++*Rb^aLx_SN%cebT-wPK(F[9NNP~[c-&0sqA Js6');
define('LOGGED_IN_KEY',    'gTIbKtTv%}$aX+cy;o`WT]zCCxN---j<+4>*h+C,^mm29j<%FpLiTt>M~>0E`FN$');
define('NONCE_KEY',        'pTF|T?^ji)m?-3QJnx@-nu=#pd-81hw_79/_reak{. SID]e,BF:-)zpLSHv>G0$');
define('AUTH_SALT',        'Pnh+V 5/ftHMMQ+!j Q%%MCqLTT0{RR.o@JX{%N=M%-[8.-zCY-7EJlygNz,r?$C');
define('SECURE_AUTH_SALT', 'AZ_!YRXO$h-v%c`c$*9Jk?&ld wn6m@p9Q^?JnhGdClR$`0X`L[|*;-US~dAv-:$');
define('LOGGED_IN_SALT',   '$-pK=|@&)DH(6n6w1S2!dN:Bf^-1mKPK(K|F {? NO{[rnJ3<Q2:N&A5JSa uR*H');
define('NONCE_SALT',       '1&5|Bvvnh_[.L7boQ{r+-!bj+G_aAAQMP{eIE!*A_K^^b[F q+BnA3AiOGS9.cW[');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
