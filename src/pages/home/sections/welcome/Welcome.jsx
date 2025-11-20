import './welcome.css'
export default function Welcome() {
    return (
        <div id="welcome-section">
            <div id="right">
                <h1>اهلا بك فى <br /> مشروع نواه</h1>
                <p>كوّن رحلتك مع فريق من المطورين والمبدعين وروّاد الأعمال، وكل من يؤمن بأن الشغف والمعرفة والعمل <br /> يمكن أن يصنعوا نهضة حقيقية — تعلّموا، طوّروا، وابتكروا معًا لبناء أثر يتجاوز حدود التخصص.</p>
                <button>اطلع على المزيد</button>
            </div>

            {/* <div id="left">
                <iframe src="home/welcome/welcome_video.mp4" />
            </div> */}
        </div>
    )
}