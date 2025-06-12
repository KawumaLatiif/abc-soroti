<header>
    <div class="logo-container">
        <img src="images/sun_badge.jpeg" alt="SUN Logo">
        <img src="images/abc_logo.jpg" alt="ABC BlendEd Logo">
    </div>
    <div class="title-container">
        <h1>ABC BlendED</h1>
        <h2>Soroti University</h2>
    </div>
    <nav>
        <?php
        $current_page = basename($_SERVER['PHP_SELF']);
        $pages = [
            'index.php' => 'Home',
            'about.php' => 'About',
            'projects.php' => 'Projects',
            'team.php' => 'Team',
            'contact.php' => 'Contact'
        ];
        foreach ($pages as $file => $title) {
            $active = ($current_page == $file) ? 'class="active"' : '';
            echo "<a href=\"$file\" $active>$title</a>";
        }
        ?>
    </nav>
</header>