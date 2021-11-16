import React from 'react';

const Footer = () => {
    const anchorStyle = {
        textDecoration: 'none',
        color: 'gray'
    }
    return (
        <footer style={{ textAlign: 'left', textDecoration: 'none' }} className="page-footer font-small bg-dark text-white pt-4">
            <div className="container-fluid text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>Auctions Record Alert! An Early 1957 Speedmaster Ref. 2915-1 Just Sold For Over $3.4 Million At Phillips, Smashing The Record For Most Expensive Omega Watch</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a style={anchorStyle} href="#!">Dhanmondi, Dhaka</a></li>
                            <li><a style={anchorStyle} href="#!">Get Direction on Google Map</a></li>
                            <li><a style={anchorStyle} href="#!">016743828548</a></li>
                            <li><a style={anchorStyle} href="#!">ask@obokash.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">ELSEWHERE</h5>
                        <ul className="list-unstyled">
                            <li><a style={anchorStyle} href="#!">Instagram</a></li>
                            <li><a style={anchorStyle} href="#!">Facebook</a></li>
                            <li><a style={anchorStyle} href="#!">Twitter</a></li>
                            <li><a style={anchorStyle} href="#!">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a style={anchorStyle} href="https://johirchowdhury.com/"> Johir Chowdhury</a>
            </div>

        </footer>
    );
};

export default Footer;