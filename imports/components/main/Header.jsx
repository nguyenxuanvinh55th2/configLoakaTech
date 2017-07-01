import React from 'react';
import {Search} from '../../javascript/header.js'
import {removeSearch} from '../../javascript/header.js'
import { Link } from 'react-router';
import {PinHeader} from '../../javascript/header.js'

export default class Header extends React.Component{
constructor(props) {
super(props);
}
 componentDidMount() {
Search();
removeSearch();
PinHeader();
}
render(){
return(
<div>
{
/*<div id="circularG">
	<div id="circularG_1" className="circularG"></div>
	<div id="circularG_2" className="circularG"></div>
	<div id="circularG_3" className="circularG"></div>
	<div id="circularG_4" className="circularG"></div>
	<div id="circularG_5" className="circularG"></div>
	<div id="circularG_6" className="circularG"></div>
	<div id="circularG_7" className="circularG"></div>
	<div id="circularG_8" className="circularG"></div>
</div>
*/}
	<div id="header">
		<div className="header-top">
			<div className="container text-right">
				<ul>
					<li>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Tìm kiếm" />
							<Link to={'#'} className="icon-search"><i className="fa fa-search" aria-hidden="true"></i></Link>
						</div>
					</li>
					<li>
						<Link to={'#'}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
					</li>
					<li>
						<Link to={'#'}><i className="fa fa-youtube-play" aria-hidden="true"></i></Link>
					</li>
				</ul>
			</div>
		</div>
		<div className="header-main">
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<div className="logo">
							<Link to={'#'}><img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/LASTEST-01_zpsymk9eoks.png" alt="" /></Link>
						</div>
					</div>
					<div className="col-sm-9 text-right">
						<nav>
							<ul>
								<li className="active">
									<Link to={'#'}>TRANG CHỦ</Link>
								</li>
								<li>
									<Link to={'#'}>GIỚI THIỆU</Link>
								</li>
								<li>
									<Link to={'#'}>SẢN PHẨM</Link>
								</li>
								<li>
									<Link to={'#'}>TIN TỨC</Link>
								</li>
								<li>
									<Link to={'#'}>HƯỚNG DẪN CHƠI</Link>
								</li>
								<li>
									<Link to={'#'}><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
}
}