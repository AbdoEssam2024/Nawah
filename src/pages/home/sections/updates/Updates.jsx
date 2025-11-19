import { updatesData } from "./updates_data"
import "./updates.css"
export default function Updates() {
    return (
        <div id="update-section">
            <div id="section-header">
                <h1>اخر المستجدات</h1>
                <h3>انتقل لصفحة المستجدات
                    <span><img src="home/last_update/updates_icon.png" alt="Updates Icon" style={{ width: "30px" }} /></span>
                </h3>
            </div>
            <div id="updates">
                {
                    updatesData.map((update) => (
                        UpdateCard(update)
                    ))
                }
            </div>
        </div>
    )
}

function UpdateCard(update) {
    return (
        <div id="update-card" key={update.id}>
            <div id="image-container">
                <img src={update.image} alt={update.title} />
            </div>
            <p><strong>{update.subtitle}</strong> | <small>{update.date}</small></p>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
        </div>
    )
}