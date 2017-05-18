const debug = require( 'debug' )( 'facebook:controllers:login' )

module.exports = (request, reply)=>{

    reply.view('login',{

        facebook_app_id:process.env.FACEBOOK_APP_ID,
        google_app_id:process.env.GOOGLE_APP_ID

    })

}




