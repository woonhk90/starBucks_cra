class IndexComponent extends React.Component{
    render(){
        return(
            <>
                <SkipComponent/>
                <WrapComponent/>
            </>
        )
    }
}

class SkipComponent extends React.Component{
    render(){
        return(
            <>
                <ul id="skip">
                    <li><a href="#header">메뉴바로가기</a></li>
                    <li><a href="#main">메인바로가기</a></li>
                    <li><a href="#footer">하단바로가기</a></li>
                </ul>
            </>
        )
    }
}
class WrapComponent extends React.Component{
    render(){
        return(
            <>
                <div id="wrap">
                    <HeaderComponent/>
                    <MainComponent/>
                    {/* <FooterComponent/> */}
                </div>
            </>
        )
    }
}
class HeaderComponent extends React.Component{
    render(){
        return(
            <>
                <header id="header">
                    <div className="container clearfix">
                        <div className="left">
                            <h1><a href="./index.html" className="logo-btn" title="StarBucks Logo"><img src="./img/logo.png" alt="logo"/></a></h1>
                        </div>
                        <div className="right">
                            <div className="top">
                                <aside id="aside" className="clearfix">
                                    <ul>
                                        <li>
                                            <div><a href="#">Sign In</a></div>
                                        </li>
                                        <li>
                                            <div><a href="#">My Starbucks</a></div>
                                        </li>
                                        <li>
                                            <div><a href="#">Customer Service & Ideas</a></div>
                                        </li>
                                        <li>
                                            <div>
                                                <a href="#">Find a Store</a>
                                            </div>
                                        </li>
                                        <li> 
                                            <form name="fsearch" id="fsearch" method="post" action="./search.html">
                                            <div>
                                                    <div>
            
                                                        <input type="text" name="search" id="search" placeholder="통합검색"/>
                                                    </div>
                                                    <a href="#" className="search-btn">
                                                        <img src="./img/icon_magnifier_black.png" alt=""/>
                                                    </a>
                                                </div>
                                        </form>
                                        </li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="bottom">
                                <nav id="nav" className="clearfix">
                                    <ul className="clearfix">
                                        <li>
                                            <a href="#" className="main-btn">COFFEE</a>
                                            <div className="sub sub1">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">커피</a></dt>
                                                                    <dd><a href="#">스타벅스 원두</a></dd>
                                                                    <dd><a href="#">스타벅스 비아</a></dd>
                                                                    <dd><a href="#">스타벅스앳홈 by 캡슐</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">커피</a></dt>
                                                                    <dd></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">스타벅스 리저브™</a></dt>
                                                                    <dd><a href="#">RESERVE MAGAZINE</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 4칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">에스프레소 음료</a></dt>
                                                                    <dd><a href="#">도피오</a></dd>
                                                                    <dd><a href="#">에스프레소 마키아또</a></dd>
                                                                    <dd><a href="#">아메리카노</a></dd>
                                                                    <dd><a href="#">마키아또</a></dd>
                                                                    <dd><a href="#">카푸치노</a></dd>
                                                                    <dd><a href="#">라떼</a></dd>
                                                                    <dd><a href="#">모카</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 5칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                                    <dd><a href="#">커피 프레스</a></dd>
                                                                    <dd><a href="#">푸어 오버</a></dd>
                                                                    <dd><a href="#">아이스 푸어 오버</a></dd>
                                                                    <dd><a href="#">커피 메이커</a></dd>
                                                                    <dd><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 6칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">커피 이야기</a></dt>
                                                                    <dd><a href="#">농장에서 우리의 손으로</a></dd>
                                                                    <dd><a href="#">최상의 아라비카 원두</a></dd>
                                                                    <dd><a href="#">스타벅스 로스트 스펙트럼</a></dd>
                                                                    <dd><a href="#">스타벅스 디카페인</a></dd>
                                                                    <dd><a href="#">클로버® 커피 추출 시스템</a></dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                        <dl>
                                                            <dt><a href="#">나와 어울리는 커피 찾기</a></dt>
                                                            <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                                                            <dt><a href="#">최상의 커피를 즐기는 법</a></dt>
                                                            <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="main-btn">MENU</a>
                                            <div className="sub sub2">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">음료</a></dt>
                                                                    <dd><a href="#">콜드 브루</a></dd>
                                                                    <dd><a href="#">브루드 커피</a></dd>
                                                                    <dd><a href="#">에스프레소</a></dd>
                                                                    <dd><a href="#">프라푸치노</a></dd>
                                                                    <dd><a href="#">블렌디드</a></dd>
                                                                    <dd><a href="#">스타벅스 피지오</a></dd>
                                                                    <dd><a href="#">티(티바나)</a></dd>
                                                                    <dd><a href="#">기타 제조 음료</a></dd>
                                                                    <dd><a href="#">스타벅스 주스(병음료)</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">푸드</a></dt>
                                                                    <dd><a href="#">브레드</a></dd>
                                                                    <dd><a href="#">케이크</a></dd>
                                                                    <dd><a href="#">샌드위치 & 샐러드</a></dd>
                                                                    <dd><a href="#">따뜻한 푸드</a></dd>
                                                                    <dd><a href="#">과일 & 요거트</a></dd>
                                                                    <dd><a href="#">스낵 & 미니 디저트</a></dd>
                                                                    <dd><a href="#">아이스크림</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">상품</a></dt>
                                                                    <dd><a href="#">머그</a></dd>
                                                                    <dd><a href="#">글라스</a></dd>
                                                                    <dd><a href="#">플라스틱 텀블러</a></dd>
                                                                    <dd><a href="#">스테인리스 텀블러</a></dd>
                                                                    <dd><a href="#">보온병</a></dd>
                                                                    <dd><a href="#">액세서리</a></dd>
                                                                    <dd><a href="#">커피 용품</a></dd>
                                                                    <dd><a href="#">패키지 티(티바나)</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 4칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">카드</a></dt>
                                                                    <dd><a href="#">실물카드</a></dd>
                                                                    <dd><a href="#">e-Gift 카드</a></dd>

                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 5칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">메뉴 이야기</a></dt>
                                                                    <dd><a href="#">나이트로 콜드브루</a></dd>
                                                                    <dd><a href="#">콜드 브루</a></dd>
                                                                    <dd><a href="#">스타벅스 티바나</a></dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                        <dl>
                                                            <dt><a href="#">나이트로 콜드 브루<img src="./img/icon_gnb_new.png" alt="New Icon"/></a></dt>
                                                            <dd>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>                                                            
                                        </li>
                                        <li>
                                            <a href="#" className="main-btn">STORE</a>
                                            <div className="sub sub3">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">매장 찾기</a></dt>
                                                                    <dd><a href="#">퀵 검색</a></dd>
                                                                    <dd><a href="#">지역 검색</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">드라이브 스루 매장</a></dt>
                                                                    <dd></dd>                                                        
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">스타벅스 리저브™ 매장</a></dt>
                                                                    <dd></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 4칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">커뮤니티 스토어 매장</a></dt>
                                                                    <dd></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 5칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">매장 이야기</a></dt>
                                                                    <dd><a href="#">티바나 바 매장</a></dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                        <dl>
                                                            <dt><a href="#">매장찾기<img src="./img/icon_gnb_new.png" alt="New Icon"/></a></dt>
                                                            <dd>보다 빠르게 매장을 찾아보세요.</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>                                                                                        
                                        </li>
                                        <li>
                                            <a href="#" className="main-btn">RESPONSIBILITY</a>
                                            <div className="sub sub4">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">사회공헌 캠페인 소개</a></dt>
                                                                    <dd></dd>

                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">지역 사회 참여 활동</a></dt>
                                                                    <dd><a href="#">희망배달 캠페인</a></dd>
                                                                    <dd><a href="#">재능기부 카페 소식</a></dd>
                                                                    <dd><a href="#">커뮤니티 스토어</a></dd>
                                                                    <dd><a href="#">청년 지원 프로그램</a></dd>
                                                                    <dd><a href="#">우리 농산물 사랑 캠페인</a></dd>
                                                                    <dd><a href="#">우리 문화 지키기</a></dd>

                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">환경보호 활동</a></dt>
                                                                    <dd><a href="#">친환경 활동</a></dd>
                                                                    <dd><a href="#">일회용 컵 없는 매장</a></dd>
                                                                    <dd><a href="#">커피 원두 재활용</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 4칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">윤리 구매</a></dt>
                                                                    <dd><a href="#">윤리적 원두 구매</a></dd>
                                                                    <dd><a href="#">공정무역 인증</a></dd>
                                                                    <dd><a href="#">커피 농가 지원 활동</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 5칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">글로벌 사회 공헌</a></dt>
                                                                    <dd><a href="#">윤리경영 보고서</a></dd>
                                                                    <dd><a href="#">스타벅스 재단</a></dd>
                                                                    <dd><a href="#">지구촌 봉사의 달</a></dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                    </div>
                                                </div>
                                            </div>                             
                                        </li>
                                        <li>
                                            <a href="#" className="main-btn">STARBUCKS REWARDS</a>
                                            <div className="sub sub5">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">스타벅스 리워드</a></dt>
                                                                    <dd><a href="#">스타벅스 리워드 소개</a></dd>
                                                                    <dd><a href="#">등급 및 혜택</a></dd>
                                                                    <dd><a href="#">스타벅스 별</a></dd>
                                                                    <dd><a href="#">자주 하는 질문</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">스타벅스 카드</a></dt>
                                                                    <dd><a href="#">스타벅스 카드 소개</a></dd>
                                                                    <dd><a href="#">스타벅스 카드 갤러리</a></dd>
                                                                    <dd><a href="#">등록 및 조회</a></dd>
                                                                    <dd><a href="#">충전 및 이용안내</a></dd>
                                                                    <dd><a href="#">분실신고/환불신청</a></dd>
                                                                    <dd><a href="#">자주 하는 질문</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">스타벅스 e-Gift Card</a></dt>
                                                                    <dd><a href="#">스타벅스 e-Gift Card 소개</a></dd>
                                                                    <dd><a href="#">이용안내선물하기</a></dd>
                                                                    <dd><a href="#">자주 하는 질문</a></dd>
                                                                </dl>
                                                            </li>
                                                        
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                        <dl>
                                                            <dt><a href="#">스타벅스 카드 등록하기</a></dt>
                                                            <dd>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>                            
                                        </li>
                                        <li>
                                            <a href="#" className="main-btn">WHAT'S NEW</a>
                                            <div className="sub sub6">
                                                <div className="top">
                                                    <div className="sub-container">
                                                        <ul>
                                                            <li> {/* <!-- 1칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">이벤트</a></dt>
                                                                    <dd><a href="#">전체</a></dd>
                                                                    <dd><a href="#">스타벅스 카드</a></dd>
                                                                    <dd><a href="#">스타벅스 리워드</a></dd>
                                                                    <dd><a href="#">온라인</a></dd>
                                                                    <dd><a href="#">e-프리퀀시 증정품</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 2칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">뉴스</a></dt>
                                                                    <dd><a href="#">전체상품 출시</a></dd>
                                                                    <dd><a href="#">스타벅스와 문화</a></dd>
                                                                    <dd><a href="#">스타벅스 사회공헌</a></dd>
                                                                    <dd><a href="#">스타벅스 카드출시</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 3칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">매장별 이벤트</a></dt>
                                                                    <dd><a href="#">일반 매장</a></dd>
                                                                    <dd><a href="#">신규 매장</a></dd>
                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 4칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">e-프리퀀시</a></dt>
                                                                    <dd><a href="#">이용안내</a></dd>
                                                                    <dd><a href="#">이용현황</a></dd>

                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 5칸 --> */}
                                                                <dl>
                                                                    <dt><a href="#">공지사항</a></dt>
                                                                    <dd></dd>

                                                                </dl>
                                                            </li>
                                                            <li> {/* <!-- 6칸 -->    */}
                                                                <dl>
                                                                    <dt><a href="#">월페이퍼</a></dt>
                                                                    <dd></dd>

                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bottom">
                                                    <div className="sub-container">
                                                        <dl>
                                                            <dt><a href="#">매장별 이벤트</a></dt>
                                                            <dd>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                                                            <dt><a href="#">월페이퍼</a></dt>
                                                            <dd>매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>                              
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="mobile">
                                <ul>
                                    <li><a href="#" className="login-btn"><img src="./img/icon_user_m.png" alt=""/></a></li>
                                    <li><a href="#" className="map-btn"><img src="./img/icon_spot_m.png" alt=""/></a></li>
                                    <li><a href="#" className="berger-btn"><img src="./img/btn_berger_m.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </header>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render() {
        return (
            <>
                <main id="main">
                    <section id="section1">
                        <div className="container">
                            <span className="ani ani1"><img src="./img/2022_NewYear_main_slogan.png" alt=""/></span>
                            <span className="ani ani2"><img src="./img/2022_NewYear_main_new_year_citrus_tea.png" alt=""/></span>
                            <span className="ani ani3"><img src="./img/2022_NewYear_main_lavender_beige_oat_latte.png" alt=""/></span>
                            <span className="ani ani4"><img src="./img/2022_NewYear_main_dolce_black_milk_tea.png" alt=""/></span>
                            <span className="ani ani5"><a href="#" className="more-btn">자세히 보기</a></span>
                        </div>
                    </section>
                    <section id="section2">
                        <div className="container">
                            <div className="left">{/* <!-- 공지사항  550  relative --> */}
                                <div className="left-box"> {/* <!-- 높이24 --> */}
                                    <div className="notice-title">
                                        <h2 className="blind">공지사항</h2>
                                    </div> {/* <!--  65 --> */}
                                    <div className="notice-list">
                                        <ul>
                                            <li className="notice-slide"><a href="#">Gift배송하기 서비스 배송지연 안내</a></li>
                                            <li className="notice-slide"><a href="#">홈페이지 이용약관 / 스타벅스 카드 이용약관 개정 안내</a></li>
                                            <li className="notice-slide"><a href="#">제25기 정기주주총회 권리행사 기준일 공고</a></li>
                                            <li className="notice-slide"><a href="#">시스템 개선 및 점검 안내</a></li>
                                            <li className="notice-slide"><a href="#">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                                        </ul>
                                    </div>  {/* <!-- 485  -->  */}
                                    {/* <!-- 더보기 --> */}
                                    <div className="notice-more">{/* <!-- absolute 62*62 --> */}
                                        <a href="#" className="more-btn" title="Notice More View">
                                            <img src="./img/btn_notice_plus.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">{/* <!-- 프로모션 550 --> */}
                                <div className="promotion">{/* <!--  234*36 --> */}
                                    <a href="#" className="promotion-btn blind" title="스타벅스 프로모션">스타벅스 프로모션</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section3">
                        <div className="container">

                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                        <li className="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                        <li className="slide slide2"><div><img src="./img/slide_02.jpg" alt=""/></div></li>
                                        <li className="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                        <li className="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                    </ul>
                                </div>                    
                            </div>

                            {/* <!-- 페이지버튼 --> */}
                            <ul className="page-btn-box">
                                <li><a href="#" className="play-btn"></a></li>
                                <li><a href="#" className="page-btn addPage"></a></li>
                                <li><a href="#" className="page-btn"></a></li>
                                <li><a href="#" className="page-btn"></a></li>
                            </ul>

                            {/* <!-- 좌우화살버튼 --> */}
                            <span className="prev-btn-arrow">
                                <a href="#" className="prev-btn blind">prev-btn</a>
                            </span>    

                            <span className="next-btn-arrow">
                                <a href="#" className="next-btn blind">next-btn</a>
                            </span>    



                        </div>
                    </section>
                    <section id="section4">
                        <div className="container">
                            <div className="left">
                                <img src="./img/rewards-logo.png" alt=""/>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h2>
                                        <span>스타벅스만의 특별한 혜택,</span> <strong>스타벅스 리워드</strong>
                                    </h2>
                                    <div>
                                        <h3 className="pc">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <h3 className="mo">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해<br/> 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><br/><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <span>
                                            <a href="#" className="sign-up">회원가입</a>
                                            <a href="#" className="sign-in">로그인</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h4 className="pc">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를</span> <stong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</stong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <h4 className="mo">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를</span><br/><stong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</stong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <span>
                                        <a href="#" className="gift-card">e-Gift Card 선물하기</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section5">
                        <div className="container">
                            <div className="left">
                                <img src="./img/2022_NewYear_bean_bean.png" alt=""/>
                            </div>
                            <div className="right">
                                <span>
                                    <img className="pc" src="./img/2022_NewYear_bean_txt.png" alt="활기찬 새해와..."/>
                                    <img className="mo" src="./img/2022_m_NewYear_bean_txt.png" alt="활기찬 새해와..."/>
                                    <a href="#" className="more-btn">자세히 보기</a>
                                </span>
                            </div>
                        </div>
                    </section>
                    <section id="section6"><div className="container"></div></section>
                    <section id="section7"><div className="container"></div></section>
                    <section id="section8"><div className="container"></div></section>
                    <section id="section9"><div className="container"></div></section>
                </main>
            </>
        );
    }
}

ReactDOM.render(
    <IndexComponent/>,
    document.getElementById('root')
);