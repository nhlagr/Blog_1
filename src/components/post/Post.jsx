import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate
        optio consequuntur itaque voluptates dignissimos saepe, fugiat cumque
        excepturi, perferendis dolorem aliquid, obcaecati distinctio odio vero
        reprehenderit? Praesentium, tenetur ratione. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Sunt voluptate optio consequuntur itaque
        voluptates dignissimos saepe, fugiat cumque excepturi, perferendis
        dolorem aliquid, obcaecati distinctio odio vero reprehenderit?
        Praesentium, tenetur ratione. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sunt voluptate optio consequuntur itaque voluptates
        dignissimos saepe, fugiat cumque excepturi, perferendis dolorem aliquid,
        obcaecati distinctio odio vero reprehenderit? Praesentium, tenetur
        ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        voluptate optio consequuntur itaque voluptates dignissimos saepe, fugiat
        cumque excepturi, perferendis dolorem aliquid, obcaecati distinctio odio
        vero reprehenderit? Praesentium, tenetur ratione.
      </p>
    </div>
  );
}
