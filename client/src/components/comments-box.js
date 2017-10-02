import React from 'react';
import './get-another-button.css'
import {connect} from 'react-redux';

export default class CommentsBox extends React.Component {
//     componentDidMount(){
//         window.fbAsyncInit = function() {
//             FB.init({
//               appId      : '1741858516108421',
//               cookie     : true,
//               xfbml      : true,
//               version    : 'v2.8'
//             });
//             FB.AppEvents.logPageView();   
//           };
        
//           (function(d, s, id){
//              var js, fjs = d.getElementsByTagName(s)[0];
//              if (d.getElementById(id)) {return;}
//              js = d.createElement(s); js.id = id;
//              js.src = "//connect.facebook.net/en_US/sdk.js";
//              fjs.parentNode.insertBefore(js, fjs);
//            }(document, 'script', 'facebook-jssdk'));

//            (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1741858516108421";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
//     }
    render(){
        return (
            <div className="get-another-button">
                <div></div>
                <div id="fb-root"></div>
                <div class="fb-comments" 
                data-href="https://developers.facebook.com/docs/plugins/comments#configurator" 
                data-width="250px" data-numposts="5">
                </div>
            </div>
        )

    }
    
}
