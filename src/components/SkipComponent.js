import React, { Component } from 'react';

class SkipComponent extends Component {
    render() {
        return (
            <>
              <ul id="skip">
                <li><a href="#header">메뉴바로가기</a></li>
                <li><a href="#main">메인바로가기</a></li>
                <li><a href="#footer">하단바로가기</a></li>
            </ul>  
            </>
        );
    }
}

export default SkipComponent;