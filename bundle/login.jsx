import Debug from 'debug'
//import Dotenv from 'dotenv'
import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery';
import GoogleLogin from 'react-google-login';

//Dotenv.load();

localStorage.debug='*'

var debug = Debug('facebook:bundle:login.jsx')

//debug(process.env.FACEBOOK_APP_ID )
//console.log(process.env.FACEBOOK_APP_ID )

const responseFacebook = ( res1 ) => {
    console.log( res1 );
    //https://graph.facebook.com/endpoint?key=value&amp;access_token=app_id|app_secret
    $.ajax({
        type:'GET',
        url: ('https://graph.facebook.com/oauth/access_token'
                +'?client_id={{facebook_app_id}}'
            +'&client_secret={{facebook_app_secret}}'
            +'&grant_type=client_credentials')
    }).done((res2)=>{

        $.ajax({
            type:'GET',
            url:('https://graph.facebook.com/debug_token?'
                 +'input_token='+res1.accessToken
                 +'&access_token='+res2.access_token+'1')

            //    ('https://graph.facebook.com/oauth/access_token'
            //+'?client_id={{facebook_app_id}}'
            //+'&client_secret={{facebook_app_secret}}'
            //+'&grant_type=client_credentials')
        }).done((response)=>{

            debug(response)

        })

        //debug(response)

    })
    //graph.facebook.com/debug_token?
    //input_token={token-to-inspect}
    //&access_token={app-token-or-admin-token}

}

const responseGoogle = ( response ) => {
    console.log( response );
}



//class FacebookLoginWrap extends React.Component {
//    constructor( props ) {
//        super( props );
//        this.state = { app_id: process.env.FACEBOOK_APP_ID };
//    }
//
//    render() {
//
//        return (  <FacebookLogin
//            appId="{{facebook_app_id}}"
//            autoLoad={true}
//            fields="name,email,picture"
//            //onClick={componentClicked}
//            callback={responseFacebook}/>)
//
//    }
//
//}

ReactDOM.render(
    <FacebookLogin
        appId="{{facebook_app_id}}"
        autoLoad={true}
        fields="name,email,picture"
        //onClick={componentClicked}
        callback={responseFacebook}/>,
    document.getElementById( 'demo' )
);

//ReactDOM.render(
//    <GoogleLogin
//        clientId="{{google_app_id}}"
//        buttonText="Login"
//        onSuccess={responseGoogle}
//        onFailure={responseGoogle}
//    />,
//    document.getElementById('google-login')
//);