import Card from "./Card";
import Shoes from "./image/shoes.png";
import PHP from "./image/PHP.png";
import WordPress from "./image/WordPress.png";

export default function Project() {
  return (
    <section id="Project">
      <div className="container-fluid">
        <div className="grid-container">
          <div className="grid-item proitem1"></div>
          <div className="grid-item proitem2">
            <a
              target="_blank"
              href="https://awesome-morse-727343.netlify.app"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                image={Shoes}
                title="React"
                description="Nike shoes website "
              />
            </a>
          </div>
          <div className="grid-item proitem3">
            <a
              target="_blank"
              href="https://www.vetbonnary.xyz/PHP/Todo.php"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                image={PHP}
                title="PHP"
                description="Todo List PHP Website"
              />
            </a>
          </div>
          <div className="grid-item proitem4"></div>
          <div className="grid-item proitem5"></div>
          <div className="grid-item proitem6">
            <a
              target="_blank"
              href="https://www.vetbonnary.xyz/wordpress/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                image={WordPress}
                title="WordPress"
                description="WordPress Website"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
