import "../stylesheets/WriterProfile.css";
import avatarWriter from "../Imagenes/avatar-writer.png";
import ratignWriter from "../Imagenes/rating-writer.png";
import shareFile from "../Imagenes/share-file.png";
import avatarUserRating from "../Imagenes/avatar-user-rating.png";

function WriterProfile() {
  return (
    <main className="container-writerprofile route_page">
      <section className="section-info-writer">
        <section>
          <img src={avatarWriter} className="avatar-writer" />
        </section>
        <section>
          <h2 className="writer-text">Nombre_usuario</h2>
          <h3 className="writer-text">Descripción_del_perfil</h3>
          <img src={ratignWriter} className="rating-writer" />
          <button className="bton-writer">Conectar</button>
        </section>
      </section>
      <section className="section-rating">
        <p>Reseñas y comentarios</p>
        <section className="section-user-rating">
          <img src={avatarUserRating} className="avatar-user-rating" />
          <p className="text-messages-rating">Lorem ipsum dolor sit amet.</p>
        </section>
        <section className="section-user-rating">
          <img src={avatarUserRating} className="avatar-user-rating" />
          <p className="text-messages-rating">Lorem ipsum dolor sit amet.</p>
        </section>
      </section>
      <section className="professional-section">
        <p>Perfil profesional</p>
        <p className="text-messages-writer">
          Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic magni
          Quis?
        </p>
      </section>
      <section className="professional-section">
        <p>Compartir archivo</p>
        <img src={shareFile} className="share-file" />
      </section>
    </main>
  );
}

export default WriterProfile;
