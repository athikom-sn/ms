<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">
                <b-icon icon="circle-fill" class="text-info" animation="throb" font-scale="1"></b-icon> Low Cost Engine
            </b-navbar-brand>

            <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">TH</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
    #nav {
        padding : 0 !important;
    }
    button.navbar-toggler {
        border : 0;
    }

    button.navbar-toggler:focus {
        border:0;
        outline : none !important;
        background : rgba(0,0,0,0.1) !important;
    }
</style>