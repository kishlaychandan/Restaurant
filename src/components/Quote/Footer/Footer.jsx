import './Footer.css'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="logo"><p><i class="fa-solid fa-burger"></i>Logoipsum</p>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blog</li>
            </ul>
            <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-basketball"></i>

            </div>
        </div>
        </>
    );
}
export default Footer;