function init(){
    topnavSecond()
    slider()
    littleSlider()
    hotOpacity()
    cosmeticsLunbo()
    MaternalLunbo()
    careLunbo()
    digitalLunbo()
    washLunbo()
    asideScroll()
    // articleScroll()
}
function topnavSecond(){
    $('#topnav ul.r li:nth-of-type(3)').mouseover(function(){
        $('.second',this).show()
    }).mouseleave(function(){
        $('.second',this).hide()
    })
    $('#topnav ul.r li:nth-of-type(4)').mouseover(function(){
        $('.second',this).show()
    }).mouseleave(function(){
        $('.second',this).hide()
    })
    $('#topnav ul.r li:nth-of-type(5)').mouseover(function(){
        $('.second',this).show()
    }).mouseleave(function(){
        $('.second',this).hide()
    })
    $('#topnav ul.r li:nth-of-type(6)').mouseover(function(){
        $('.second',this).show()
    }).mouseleave(function(){
        $('.second',this).hide()
    })
    $('#topnav ul.r li:nth-of-type(7)').mouseover(function(){
        $('.second',this).show()
    }).mouseleave(function(){
        $('.second',this).hide()
    })
}
function slider(){
    var current = 0
    var id;
    function slide(index){
        $('#banner .slider .list .current').removeClass('current')
        $($('#banner .slider .list li')[index]).addClass('current')
        $('#banner .slider .pagination .focus').removeClass('focus')
        $($('#banner .slider .pagination li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#banner .slider .list li').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#banner .slider .list li').length){
            current = 0
        }
        slide(current)
    }
    $('#banner .slider .btn-prev').click(function(){
        console.log(current)
        prev()
    })
    $('#banner .slider .btn-next').click(function(){
        console.log(current)
        next()
    })
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    $('#banner .slider').mouseover(function(){
        clearInterval(id)
    })
    $('#banner .slider').mouseout(function(){
        autoplay()
    })
    $('#banner .slider .pagination li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
    $('#banner .slider').mouseover(function(){
        $('.btn-prev',this).show()
    }).mouseleave(function(){
        $('.btn-prev',this).hide()
    })
    $('#banner .slider').mouseover(function(){
        $('.btn-next',this).show()
    }).mouseleave(function(){
        $('.btn-next',this).hide()
    })
}
function asideScroll(){
    window.addEventListener('scroll',function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if(scrollTop>677){
            $('#imgWarp .aside')[0].style.position = 'fixed';
            $('#imgWarp .aside')[0].style.top =0 ;
            $('#imgWarp .aside')[0].style.left ='60px' ;
        }else{
            $('#imgWarp .aside')[0].style.position = 'absolute';
            $('#imgWarp .aside')[0].style.top =0 ;
            $('#imgWarp .aside')[0].style.left ='60px' ;
        }
    },true)
    window.addEventListener('scroll',function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if(scrollTop>677){
            $('#headerBox')[0].style.position = 'fixed';
            $('#headerBox')[0].style.top =0 ;
            $('#headerBox')[0].style.left ='160px' ;
        }else{
            $('#headerBox')[0].style.position = 'relative';
            $('#headerBox')[0].style.top =0 ;
            $('#headerBox')[0].style.left =0 ;
        }
    },true) 
    window.addEventListener('scroll',function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        if(scrollTop>677){
            $('#imgWarp .article')[0].style.position = 'fixed';
            $('#imgWarp .article')[0].style.top =0 ;
            $('#imgWarp .article')[0].style.right ='100px' ;
        }else{
            $('#imgWarp .article')[0].style.position = 'absolute';
            $('#imgWarp .article')[0].style.top =0 ;
            $('#imgWarp .article')[0].style.right ='100px' ;
        }
    },true)

}
function littleSlider(){
    var current = 0
    var id;
    function slide(index){
        $('#hotBox #hot .down div.left ul.up .current').removeClass('current')
        $($('#hotBox #hot .down div.left ul.up li')[index]).addClass('current')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#hotBox #hot .down div.left ul.up li').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#hotBox #hot .down div.left ul.up li').length){
            current = 0
        }
        slide(current)
    }
    $('#hotBox #hot .down div.left ul.up .btn-prev').click(function(){
        console.log(current)
        prev()
    })
    $('#hotBox #hot .down div.left ul.up .btn-next').click(function(){
        console.log(current)
        next()
    })
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    $('#hotBox #hot .down div.left ul.up').mouseover(function(){
        clearInterval(id)
    })
    $('#hotBox #hot .down div.left ul.up').mouseout(function(){
        autoplay()
    })
}

function hotOpacity(){
    $('#hotBox #hot .down ul.right li:nth-of-type(1)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(1) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(1) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(2)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(2) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(2) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(3)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(3) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(3) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(4)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(4) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(4) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(5)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(5) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(5) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(6)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(6) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(6) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(7)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(7) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(7) .in')[0].style.zIndex=-1;
    }
    )
    $('#hotBox #hot .down ul.right li:nth-of-type(8)').mouseover(function(){
        console.log($('#hotBox #hot .down ul.right li:nth-of-type(8) .out img'));
       
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out img')[0].style.transform = 'scale(0.5)';
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out img')[0].style.marginTop='-10px'
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out p')[0].style.opacity= 0;
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .in')[0].style.opacity = 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .in')[0].style.zIndex=1;
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out img')[0].style.zIndex=4;
    }).mouseleave(function(){
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out img')[0].style.transform = 'scale(1)';
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out img')[0].style.marginTop="10px"
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .out p')[0].style.opacity= 1;
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .in')[0].style.opacity = "0";
        $('#hotBox #hot .down ul.right li:nth-of-type(8) .in')[0].style.zIndex=-1;
    }
    )






}

function cosmeticsLunbo(){
    var current = 0
    var id;
    function slide(index){
        $('#cosmetics .w .middle .partr .box .current').removeClass('current')
        $($('#cosmetics .w .middle .partr .box ul')[index]).addClass('current')
        $('#cosmetics .w .middle .partr .upup ul .focus').removeClass('focus')
        $($('#cosmetics .w .middle .partr .upup ul li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#cosmetics .w .middle .partr .box ul').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#cosmetics .w .middle .partr .box ul').length){
            current = 0
        }
        slide(current)
    }
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    autoplay()
    $('#cosmetics .w .middle .partr .upup ul li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
}
function MaternalLunbo(){
    var current = 0
    var id;
    function slide(index){
        $('#Maternal .w .middle .partr .box .current').removeClass('current')
        $($('#Maternal .w .middle .partr .box ul')[index]).addClass('current')
        $('#Maternal .w .middle .partr .upup ul .focus').removeClass('focus')
        $($('#Maternal .w .middle .partr .upup ul li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#Maternal .w .middle .partr .box ul').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#Maternal .w .middle .partr .box ul').length){
            current = 0
        }
        slide(current)
    }
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    autoplay()
    $('#Maternal .w .middle .partr .upup ul li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
}
function careLunbo(){
    var current = 0
    var id;
    function slide(index){
        $('#care .w .middle .partr .box .current').removeClass('current')
        $($('#care .w .middle .partr .box ul')[index]).addClass('current')
        $('#care .w .middle .partr .upup ul .focus').removeClass('focus')
        $($('#care .w .middle .partr .upup ul li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#care .w .middle .partr .box ul').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#care .w .middle .partr .box ul').length){
            current = 0
        }
        slide(current)
    }
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    autoplay()
    $('#care .w .middle .partr .upup ul li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
}
function digitalLunbo(){
    var current = 0
    var id;
    function slide(index){
        $('#digital .w .middle .partr .box .current').removeClass('current')
        $($('#digital .w .middle .partr .box ul')[index]).addClass('current')
        $('#digital .w .middle .partr .upup ul .focus').removeClass('focus')
        $($('#digital .w .middle .partr .upup ul li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#digital .w .middle .partr .box ul').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#digital .w .middle .partr .box ul').length){
            current = 0
        }
        slide(current)
    }
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    autoplay()
    $('#digital .w .middle .partr .upup ul li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
}
function washLunbo(){
    var current = 0
    var id;
    function slide(index){
        $('#wash .w .middle .partr .box .current').removeClass('current')
        $($('#wash .w .middle .partr .box ul')[index]).addClass('current')
        $('#wash .w .middle .partr .upup ul .focus').removeClass('focus')
        $($('#wash .w .middle .partr .upup ul li')[index]).addClass('focus')
    }
    function prev(){
        current--
        if(current === -1){
            current = $('#wash .w .middle .partr .box ul').length - 1
        }
            slide(current)
    }
    function next(){
        current++
        if(current === $('#wash .w .middle .partr .box ul').length){
            current = 0
        }
        slide(current)
    }
    function autoplay(){
        clearInterval(id)
        id=setInterval(function(){
            next()
        },1000)
    }
    autoplay()
    $('#wash .w .middle .partr .upup ul li').mouseover(function(){
        console.log($(this).index())
        slide($(this).index())
    })
}

init()