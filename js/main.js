jQuery(document).ready(function($){

            $(".accordion_example1").smk_Accordion();

            $(".accordion_example2").smk_Accordion({
                closeAble: true, //boolean
            });

            $(".accordion_example3").smk_Accordion({
                showIcon: false, //boolean
            });

            $(".accordion_example4").smk_Accordion({
                closeAble: true, //boolean
                closeOther: false, //boolean
            });

            $(".accordion_example5").smk_Accordion({closeAble: true});

            $(".accordion_example6").smk_Accordion();
            
            $(".accordion_example7").smk_Accordion({
                activeIndex: 2 //second section open
            });
            $(".accordion_example8, .accordion_example9").smk_Accordion();


            // Demo text. Let's save some space to make the code readable. ;)
            $('.acc_content').not('.nodemohtml').html('<p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla  tempus, molestie fermentum purus euismod.</p>');
            
        });