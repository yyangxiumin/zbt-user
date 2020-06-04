/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        //        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function() {


    //    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function() {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if (diff > 0)
            $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
        else
            $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    });



    //    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    /*$('.fa-bars').click(function() {
      if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
          'margin-left': '0px'
        });
        $('#sidebar').css({
          'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
      } else {
        $('#main-content').css({
          'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
          'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
      }
    });*/

    // custom scrollbar
    $("#sidebar").niceScroll({
        styler: "fb",
        cursorcolor: "#4ECDC4",
        cursorwidth: '3',
        cursorborderradius: '10px',
        background: '#404040',
        spacebarenabled: false,
        cursorborder: ''
    });

    //  $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});

    // widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function() {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function() {
        jQuery(this).parents(".panel").parent().remove();
    });


    //    tool tips

    $('.tooltips').tooltip();

    //    popovers

    $('.popovers').popover();



    // custom bar chart

    if ($(".custom-bar-chart")) {
        $(".bar").each(function() {
            var i = $(this).find(".value").html();
            $(this).find(".value").html("");
            $(this).find(".value").animate({
                height: i
            }, 2000)
        })
    }

}();

jQuery(document).ready(function( $ ) {

    // Go to top
    $('.go-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},500);
    });


   //关闭启用代码	
	
      var flag = true;
      $( ".tab-on" ).click( function() {
          if(flag){
            $(this).parents(".list-div").addClass('grey-bg');
            $(this).text( "启用" );
			$(this).parents(".list-div").find(".closed").css('display','inline-block');
          
            flag = false;
          }else{
            $(this).parents(".list-div").removeClass('grey-bg');
            $(this).text( "关闭" ); 
			$(this).parents(".list-div").find(".closed").css('display','none');
            
            flag = true;
          }
        });




    //年龄范围只能输入数字
    $(document).on('keyup', '#N1', function () {
        if (!$("#N1").val().match(/^\d*$/)) {
            $('.abcde').fadeIn();
            $('.abcde').text("*只能输入纯数字");
            $('#N1').addClass('error_input');


            return;
        } else {
            $('.abcde').fadeOut();
            $('.abcde').text("");
            $('#N1').removeClass('error_input');
        }



    })


    $(document).on('keyup', '#N2', function () {
        if(Number($('#N1').val())>Number($('#N2').val())||(!$("#N2").val().match(/^\d*$/))){
            $('.abcde').fadeIn();
            $('.abcde').text("只能输入纯数字且输入的最高年龄应比最低年龄大！请重新输入！");
            $('.#N2').addClass('error_input');
            return;
        }else {
            $('.abcde').fadeOut();
            $('.abcde').text("");
            $('#N2').removeClass('error_input');
        }


    });

    //岗位要求不能为空
    $(document).on('keyup', '.m-textarea', function () {
        if ($(".m-textarea").val() == ""){
            $(".m-textarea").focus();
            $('.abcde').fadeIn();
            $('.abcde').text("输入内容不能为空！");

        }  else{
            $('.abcde').fadeOut();
            $('.abcde').text("");

        }

    });
    /* footer高度任意+js*/


    function footerPosition(){

        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight;//网页正文全文高度
        winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)) {
            $("#main-content").height(winHeight-50);
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            // $("footer").addClass("fixed-bottom");
        }
    }

    footerPosition();
    $(window).resize(footerPosition);



    /* 菜单切换效果 */

   

        $('.fa-bars').click(function() {
            if ($('#sidebar > ul').is(":visible") === true) {
                $('#main-content').css({
                    'margin-left': '0px'
                });
                $('#sidebar').css({
                    'margin-left': '-210px'
                });
                $('#sidebar > ul').hide();
                $("#container").addClass("sidebar-closed");
            } else {
                $('#main-content').css({
                    'margin-left': '210px'
                });
                $('#sidebar > ul').show();
                $('#sidebar').css({
                    'margin-left': '0'
                });
                $("#container").removeClass("sidebar-closed");
            }
        });


  

   
   
        //导航栏添加样式
        var mynav = $('ul.sidebar-menu li').find('a'); //寻找导航的a元素
        for(var i = 0; i < mynav.length; i++) {  //循环遍历
            var links = mynav[i].getAttribute('href'); //取出每个链接的href属性的值
            var myurl = document.location.href; //取出当前窗口的链接
            if(myurl.indexOf(links) != -1) { //判断浏览器地址是否等于当前a元素的href属性
                mynav[i].className = "active"; //添加类
            }
        }
    

});





		
	
