function regInit(){
    regChange()
    input()
}
function regChange(){
    
    
    $('#banner .w .login .content .contentFooter .box .a_last').click(function(){
        
        $('#banner .w .reg').show();
        $('#banner .w .login').hide()
 
    })
    $('#banner .w .reg .up a').click(function(){
      
        $('#banner .w .reg').hide()
        $('#banner .w .login').show()
    })
    $('#banner .w .loginEmail .content .contentFooter .box .a_last').click(function(){
        
        $('#banner .w .reg').show();
        $('#banner .w .loginEmail').hide()
 
    })
    $('#banner .w .loginEmail .up .up1').click(function(){
        $('#banner .w .loginEmail').hide();
        $('#banner .w .login').show()
    })
    $('#banner .w .login .up .up2').click(function(){
        $('#banner .w .login').hide()
        $('#banner .w .loginEmail').show();
    })

    var isTrue = true;
    $('#banner .w .login .content .title a').click(function(){
        if(isTrue){
            $('#banner .w .login .content .title a').html('<a href="javascript:;"><span class="iconfont">&#xe675;</span>使用短信验证登录</a>')
            $('#banner .w .login .content .passage').hide();
            $('#banner .w .login .content .password').show()
        }
        else{
            $('#banner .w .login .content .title a').html('<a href="javascript:;"><span class="iconfont">&#xe638;</span>使用密码验证登录</a>')
            $('#banner .w .login .content .passage').show();
            $('#banner .w .login .content .password').hide()
        }
        isTrue = !isTrue
    })
}
function input(){
    //#banner .w .reg .content .text input
    $('#banner .w .reg .content .text input').focus(function(){
        $('#banner .w .reg .content .text')[0].style.borderColor = 'red'
    })
    $('#banner .w .reg .content .text input').blur(function(){
        $('#banner .w .reg .content .text')[0].style.borderColor = '#c5cddb'
    })
    //#banner .w .reg .content .passage input
    $('#banner .w .reg .content .passage input').focus(function(){
        $('#banner .w .reg .content .passage')[0].style.borderColor = 'red'
    })
    $('#banner .w .reg .content .passage input').blur(function(){
        $('#banner .w .reg .content .passage')[0].style.borderColor = '#c5cddb'
    })
    //#banner .w .reg .content .password input
    $('#banner .w .reg .content .password input').focus(function(){
        $('#banner .w .reg .content .password')[0].style.borderColor = 'red'
    })
    $('#banner .w .reg .content .password input').blur(function(){
        $('#banner .w .reg .content .password')[0].style.borderColor = '#c5cddb'
    })
    

    //#banner .w .login .content .text input
    $('#banner .w .login .content .text input').focus(function(){
        $('#banner .w .login .content .text')[0].style.borderColor = 'red'
    })
    $('#banner .w .login .content .text input').blur(function(){
        $('#banner .w .login .content .text')[0].style.borderColor = '#c5cddb'
    })
    //#banner .w .login .content .passage input
    $('#banner .w .login .content .passage input').focus(function(){
        $('#banner .w .login .content .passage')[0].style.borderColor = 'red'
    })
    $('#banner .w .login .content .passage input').blur(function(){
        $('#banner .w .login .content .passage')[0].style.borderColor = '#c5cddb'
    })
    //#banner .w .login .content .password input
    $('#banner .w .login .content .password input').focus(function(){
        $('#banner .w .login .content .password')[0].style.borderColor = 'red'
    })
    $('#banner .w .login .content .password input').blur(function(){
        $('#banner .w .login .content .password')[0].style.borderColor = '#c5cddb'
    })


    //#banner .w .loginEmail .content .text input
    $('#banner .w .loginEmail .content .text input').focus(function(){
        $('#banner .w .loginEmail .content .text')[0].style.borderColor = 'red'
    })
    $('#banner .w .loginEmail .content .text input').blur(function(){
        $('#banner .w .loginEmail .content .text')[0].style.borderColor = '#c5cddb'
    })
    //#banner .w .loginEmail .content .passage input
    $('#banner .w .loginEmail .content .passage input').focus(function(){
        $('#banner .w .loginEmail .content .passage')[0].style.borderColor = 'red'
    })
    $('#banner .w .loginEmail .content .passage input').blur(function(){
        $('#banner .w .loginEmail .content .passage')[0].style.borderColor = '#c5cddb'
    })

}





regInit()