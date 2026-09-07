function ReelsItem({ photo, title_image }) {
  return (
    <article className="reel-item">
      <div className="reel-frame">
        <img src={photo} alt={title_image} />
      </div>
      <p className="reel-caption">{title_image}</p>
    </article>
  );
}

export default ReelsItem;
